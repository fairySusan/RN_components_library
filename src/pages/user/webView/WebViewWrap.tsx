import React from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';

function WebViewScreen() {
  return (
    <WebView
      renderLoading={() => (<ActivityIndicator animating={true} />)}
      startInLoadingState={true}
      source={{ uri: 'https://baidu.com/' }}
    />
  )
}

export default WebViewScreen;