import CodePush from 'react-native-code-push';
import {Alert} from 'react-native';
import {DeviceUtil} from '@/utils';

export const androidCodePushKey = {
  Production: 'T41ZqcvMgf21mIl5c5Po9lX0sxw8Vni5J46iMu',
  Staging: 'BE9fRwd1Q_f34N9onGENGiWz65qSiowwBERbC'
}

export const codePushConfig = {
  deploymentKey: androidCodePushKey.Staging,
  checkFrequency: __DEV__?CodePush.CheckFrequency.MANUAL:CodePush.CheckFrequency.ON_APP_START,
  installMode:CodePush.InstallMode.ON_NEXT_RESTART,
  updateDialog:{
      title: "发现新版本",
      optionalUpdateMessage: "发现新版本，是否立即更新？\n",
      mandatoryUpdateMessage: "发现新版本，立即安装\n",
      mandatoryContinueButtonLabel: "立即更新",
      appendReleaseDescription: true,
      optionalIgnoreButtonLabel: "下次一定",
      optionalInstallButtonLabel: "立即更新",
      descriptionPrefix: "更新详情："
  },
  
}

export const codePushStatusChange = (status:CodePush.SyncStatus) => {
  switch(status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          console.log("正在检查新版本");
          break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          console.log("正在下载更新包");
          break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
          console.log("安装更新");
          Alert.alert("提示", "更新完成，是否立即生效？", [{
              text: "确定",
              onPress: () => {
                  CodePush.restartApp();
              }
          }, {
              text: "稍后重启"
          }])
          break;
      case CodePush.SyncStatus.UP_TO_DATE:
          console.log("已是最新版");
          break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
          console.log("安装完成");
          break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
          console.log("未知错误");
          break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
          console.log("等待用户确认");
          break;
      case CodePush.SyncStatus.SYNC_IN_PROGRESS:
          console.log("下载中");
          break;
  }
}