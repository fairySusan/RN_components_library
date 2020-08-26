import React from 'react';
import {View, Text, StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import { Theme } from '@/assets/styles';


export function Grid(props: {data: any[], onPress: (item:any) => void}) {
  const {data, onPress} = props;
  return (
    <View style={styles.grid}>
      {data.map((item:any, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => {onPress(item)}} >
          <View style={styles.textIcon}>
            <Image style={styles.icon} source={{uri: item.ModuleIcon}} />
            <Text style={{fontSize: Theme.miniFontSize, marginTop: 3}}>{item.ModuleName}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 70,
  },
  icon: {
    width: 36,
    height: 36,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
