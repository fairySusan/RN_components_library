import * as WeChat from 'react-native-wechat-lib';
import { Alert } from 'react-native';

WeChat.registerApp('wxad7b76ab8b249a16', 'universalLink');

export class WechatUtil{

  public static WeChat = WeChat

  public static async toMiniProgram(params: WeChat.LaunchMiniProgramMetadata){
      let isInstall = await WeChat.isWXAppInstalled();
      if(isInstall){
          WeChat.launchMiniProgram(params);
      }else{
          Alert.alert("提示", "尚未安装微信");
      }
  }

}