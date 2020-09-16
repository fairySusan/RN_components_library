import React from 'react';
import { View } from 'react-native';
import CodePush from 'react-native-code-push';
import { codePushConfig, codePushStatusChange} from '@/config/CodePush';
import ProgressModal from './ProgressModal';

export default function(com:React.ComponentClass) {
  class CodePushWrapper extends com {
    public state = {
      progress: 0,
      status: "",
  }

  public codePushStatusDidChange(status: CodePush.SyncStatus){
      codePushStatusChange(status);
  }
  public codePushDownloadDidProgress(progress: any){
      this.setState({
          progress: Number(progress.receivedBytes/progress.totalBytes).toFixed(2)
      })
      console.log("下载进度", progress)
  }
  public render(){
      let { progress } = this.state;
      return (
              <View style={{flex: 1}}>
                  {super.render()}
                  {(progress > 0 && progress < 1)?<ProgressModal progress={progress} />:null}
              </View>
      )
  }
  }

  return CodePush(codePushConfig)(CodePushWrapper)
}