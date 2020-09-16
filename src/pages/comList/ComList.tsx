import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from "react-native";
import { IconList, DataItem } from '@/components';

function ComList() {
  const navigation = useNavigation();
  return (
    <View>
      <IconList 
        data={[{icon:'star', text: '下拉刷新组件',route: 'pageList'}]}
        onPress={(item:DataItem) => {navigation.navigate(item.route)}}/>
      <IconList 
        data={[{icon:'like1', text: 'Input',route: 'input'}]}
        onPress={(item:DataItem) => {navigation.navigate(item.route)}}/>
    </View>
  )
}

export default ComList;