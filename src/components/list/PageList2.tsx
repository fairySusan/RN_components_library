import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { PageListView } from './PageListView';
import { CommonSty, Theme } from '@/assets/styles';

interface Props {
  listRef: (ref: PageListView) => void
  isInitRefresh?: boolean, //是否自动初始化加载数据,默认是true
  listStyle?: any, // 整体样式，可设置padding margin 。。。
  height?: number,
  width?: number,
  pageLen?: number,
  refresh?: (callBack:any) => void, //初始化和下拉刷新时调用， 把请求回来的数据传入:callBack(res.data)
  loadMore?: (pageIndex: number, callBack: any) => void, // 上拉加载下一页调用:callBack(res.data), 如果不需要翻页，则不传
  renderRow: (item: any, index: number) => JSX.Element
}

  const renderEmpty = () => (<Text style={styles.noData}>暂无数据</Text>);

  const renderLoadMore= () => {
    return (
      <View style={styles.loadingMore}>
        <ActivityIndicator animating={true} color={Theme.ThemeColor} />
        <Text style={styles.loadingMoreText}>正在加载数据...</Text>
      </View>
    )
  }

  const renderNoMore= () => {
    return(
      <Text style={styles.noMore}>没有更多的数据了~~</Text>
    );
  };

export const PageList2 =(props: Props) => {
  const {listRef, ...prop} = props;
  return (
    <PageListView
      {...prop}
      ref={listRef}
      renderEmpty={renderEmpty}
      renderLoadMore={renderLoadMore}
      renderNoMore={renderNoMore}
    />
  )
};

const styles = StyleSheet.create({
  noData: {
    textAlign: 'center',
    marginTop: 20,
    color: Theme.greyFontColor
  },
  loadingMore: {
    ...CommonSty.flexRowCenter,
    alignItems: 'center',
    height: 50,
    lineHeight: 50
  },
  loadingMoreText: {
    color: Theme.ThemeColor,
    marginLeft: 10,
  },
  noMore: {
    color: Theme.greyFontColor,
    textAlign: 'center',
    height: 50,
    lineHeight: 50
  },
  tips: {
    color: Theme.ThemeColor,
    textAlign: 'center'
  }
})