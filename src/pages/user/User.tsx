import React from 'react';
import codePush from "react-native-code-push";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { IconList } from '@/components';
import { codePushConfig } from '@/config/CodePush';
import { CommonSty } from '@/assets/styles';
import { WechatUtil } from '@/utils'

function User() {
  const menus = [
    {icon: 'enviromento', text: '配置地图', route: 'amap'},
    {icon: 'chrome', text: '内嵌web网页', route: 'webView'},
  ]
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
        data={menus}
        onPress={(item) => navigation.navigate(item.route)}
      />
      <IconList
        data={[ {icon: 'wechat', text: '打开微信小程序', route: 'webView'}]}
        onPress={(item) => WechatUtil.toMiniProgram({
          userName: 'gh_b5ccca99adf7',
          path: 'pages/seckill/index',
          miniProgramType: 0})}
      />
    </View>
  )
}

export default User;