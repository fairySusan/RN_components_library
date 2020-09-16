
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CodePushWrapper } from '@/components'
import NavigationContent from '@/navigation/StackNavogator';
import store from './src/store'

const persistor = getPersistor();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PersistGate persistor={persistor}>
            <NavigationContent/>
          </PersistGate>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default CodePushWrapper(App);
