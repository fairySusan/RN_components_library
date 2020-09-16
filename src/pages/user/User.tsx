import React from 'react';
import codePush from "react-native-code-push";
import { Text, View } from 'react-native';
import { IconList } from '@/components';
import { codePushConfig } from '@/config/CodePush';
import { CommonSty } from '@/assets/styles';

function User() {
  const updateManual = () => {
    codePush.sync(codePushConfig)
  }
  return (
    <View style={CommonSty.full}>
      <IconList
        data={[{icon: 'sync', text: '检查更新', route: ''}]}
        onPress={updateManual}
      />
    </View>
  )
}

export default User;