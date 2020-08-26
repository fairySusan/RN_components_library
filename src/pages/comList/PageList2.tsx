import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, useWindowDimensions, Alert  } from 'react-native';
import Swiper from 'react-native-swiper';
import { Theme, CommonSty } from '@/assets/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PageList2} from '@/components';
import {BaseResponse} from '@/models/ResponseType';
import { getList } from '@/http/user';

interface resTy {
  userName: string,
  passWord: string,
}

function PageList2Screen() {
  const [resData , setResData] = useState([{userName: 'xxx', passWord: 'sichcosi'}]);

  const _getList = async (callBack:any, pageIndex:number = 1) => {
    console.log('下拉沙墟');
    const res = await getList({pageIndex});
    setResData(res.data);
    callBack(res.data);
    return Promise.resolve(res.data);
  }
  console.log(useWindowDimensions().height)
  useEffect(() => {
    // _getList();
    
  })
  return (
    <View style={CommonSty.full}>
      <View style={{height: 50, backgroundColor: 'red'}}></View>
      <Swiper
        // height={400}
      >
        <View style={{height: 512}}>
          <PageList2
            listRef={(ref) => {}}
            pageLen={10}
            refresh={(callBack) => _getList(callBack, 1)}
            loadMore={(pageIndex, callBack) => _getList(callBack, pageIndex)}
            renderRow={(item:any, index: number) => (
              <TouchableOpacity style={styles.item} key={index} onPress={() => {console.log('touch')}}>
                <Text style={styles.text}>{index}</Text>
                <Text style={styles.text}>{item.userName}</Text>
                <Icon style={styles.arrow} size={22} name='arrowright' color={Theme.greyFontColor}></Icon>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{height: 512}}>
          <PageList2
            listRef={(ref) => {}}
            pageLen={10}
            refresh={(callBack) => _getList(callBack, 1)}
            loadMore={(pageIndex, callBack) => _getList(callBack, pageIndex)}
            renderRow={(item:any, index: number) => (
              <TouchableOpacity style={styles.item} key={index} onPress={() => {console.log('touch')}}>
                <Text style={styles.text}>{index}</Text>
                <Text style={styles.text}>{item.userName}</Text>
                <Icon style={styles.arrow} size={22} name='arrowright' color={Theme.greyFontColor}></Icon>
              </TouchableOpacity>
            )}
          />
        </View>
      </Swiper>
    </View>
    
  )
}

export default PageList2Screen;

const styles = StyleSheet.create({
  text: {
    color: Theme.ThemeFontColor,
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