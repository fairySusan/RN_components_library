import React from 'react';
import codePush from "react-native-code-push";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { IconList } from '@/components';
import { codePushConfig } from '@/config/CodePush';
import { CommonSty } from '@/assets/styles';

function User() {
  const navigation = useNavigation();
  const updateManual = () => {
    codePush.sync(codePushConfig)
  }
  return (
    <View style={CommonSty.full}>
      <IconList
        data={[{icon: 'sync', text: '检查更新', route: ''}]}
        onPress={updateManual}
      />
      <IconList
        data={[{icon: 'enviromento', text: '配置地图', route: ''}]}
        onPress={() => navigation.navigate('amap')}
      />
    </View>
  )
}

export default User;