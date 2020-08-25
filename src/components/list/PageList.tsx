import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View, Text, RefreshControl, ActivityIndicator, StyleSheet} from 'react-native';
import { Theme, CommonSty } from '@/assets/styles';

interface Props {
  pageSize: number,
  renderItem: (data:{item: any, index: number}) => JSX.Element,
  onRefresh?: () => Promise<any[]>
  onLoadMore?: (pageIndex:number) => Promise<any[]>
}

export function PageList(props: Props) {
  const {renderItem, onRefresh, onLoadMore, pageSize} = props;

  const [refreshing, setRefreshing] = useState(false)
  const [dataSource, setDataSource] = useState([]);
  const [isPulling, setIsPulling] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageIndex, setPageIndex] = useState(2);

  useEffect(() => {
    _onRefresh()
  }, [])

  const _onRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      const data:any[] = await onRefresh();
      setDataSource(data);
      setRefreshing(false);
      setPageIndex(1);
      setHasMore(true);
    }
  }

  const _onEndReached = async () => {
    if (hasMore) {
      setPageIndex(pageIndex + 1);
      if (onLoadMore) {
        setIsPulling(true);
        console.log('page', pageIndex);
        const data:any[] = await onLoadMore(pageIndex);
        setDataSource(dataSource.concat(data));
        setIsPulling(false);
        if (data.length < pageSize) setHasMore(false);
      };
    }
  }

  const emptyComponent = (
    <View>
      <Text>暂无数据</Text>
    </View>
  )

  const footerComponent = (
    <View style={styles.footer}>
      {
        isPulling 
        ?
        <View style={styles.loadMore}>
          <ActivityIndicator animating={true} color={Theme.themeColor}/>
          <Text style={styles.loadText}>正在加载...</Text>
        </View>
        :
        (
          hasMore
          ?
          <Text style={styles.tipText}>下拉加载更多</Text>
          :
          <Text style={styles.tipText}>已无更多数据</Text>
        )
      }
    </View>
  )
  return (
    <FlatList
      data={dataSource}
      renderItem={renderItem}
      onEndReached={() => {_onEndReached()}}
      onEndReachedThreshold={0.01}
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshing} colors={[Theme.themeColor]} onRefresh={_onRefresh} />
      }
      ListEmptyComponent={emptyComponent}
      ListFooterComponent={footerComponent}
      keyExtractor={(item: object, index: number) => index.toString()}
    >

    </FlatList>
  )
}

const styles = StyleSheet.create({
  tipText: {
    color: Theme.grayFontColor,
    fontSize: Theme.themeFontSize,
    textAlign: 'center',
    flex: 1,
    lineHeight: 60,
  },
  footer: {
    backgroundColor: Theme.grayBk,
    height: 60,
  },
  loadMore:{
    ...CommonSty.flexRowCenter,
    alignItems: 'center',
    flex: 1
  },
  loadText: {
    color: Theme.themeColor,
    marginLeft: 10,
  }
})