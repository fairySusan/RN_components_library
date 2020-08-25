import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet } from 'react-native';
import { Theme, CommonSty } from '@/assets/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PageList} from '@/components';
import {BaseResponse} from '@/models/ResponseType';
import { getList } from '@/http/user';

interface resTy {
  userName: string,
  passWord: string,
}

function PageListScreen() {
  const [resData , setResData] = useState([{userName: 'xxx', passWord: 'sichcosi'}]);

  const _getList = async (pageIndex:number = 1) => {
    console.log('下拉沙墟');
    const res = await getList({pageIndex});
    setResData(res.data);
    return Promise.resolve(res.data);
  }

  useEffect(() => {
    // _getList();
  }, [])
  return (
    <PageList
      pageSize={10}
      onRefresh={_getList}
      onLoadMore={_getList}
      renderItem={(el:{item:any, index: number}) => (
        <TouchableOpacity style={styles.item} key={el.index} onPress={() => {}}>
          <Text style={styles.text}>{el.index}</Text>
          <Text style={styles.text}>{el.item.userName}</Text>
          <Icon style={styles.arrow} size={22} name='arrowright' color={Theme.grayFontColor}></Icon>
        </TouchableOpacity>
      )}
    />
  )
}

export default PageListScreen;

const styles = StyleSheet.create({
  text: {
    color: Theme.themeFontColor,
    marginLeft: 10,
  },
  item: {
    height: 60,
    padding: 10,
    ...CommonSty.flexRowStart,
    alignItems: 'center',
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: 1
  },
  arrow: {
    position: 'absolute',
    right: 10
  }
})