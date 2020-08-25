import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet } from 'react-native';
import { Theme, CommonSty } from '@/assets/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface DataItem {
  icon:string,
  text:string,
  route: string
}

interface Props {
  data: DataItem[],
  onPress: (item: DataItem) => void
}

export function IconList(props: Props) {
  const {data, onPress} = props;
  return (
    <View>
      {
        data.map((item:DataItem, i:number) => (
          <TouchableOpacity style={styles.item} key={i} onPress={() => {onPress(item)}}>
            <Icon name={item.icon} size={22} color={Theme.themeColor}/>
            <Text style={styles.text}>{item.text}</Text>
            <Icon style={styles.arrow} size={22} name='arrowright' color={Theme.grayFontColor}></Icon>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Theme.themeFontColor,
    marginLeft: 10,
  },
  item: {
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