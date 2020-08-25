import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from "react-native";
import { IconList, DataItem } from '@/components';
import { CommonSty } from '@/assets/styles';

function ComList() {
  const navigation = useNavigation();
  return (
    <View>
      <IconList 
        data={[{icon:'star', text: '下拉刷新组件',route: 'pageList'}]}
        onPress={(item:DataItem) => {navigation.navigate(item.route)}}/>
      <IconList 
        data={[{icon:'star', text: '下拉刷新组件2',route: 'pageList2'}]}
        onPress={(item:DataItem) => {navigation.navigate(item.route)}}/>
    </View>
  )
}

export default ComList;