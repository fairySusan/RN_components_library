
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationContent from '@/navigation/StackNavogator';
import store from './store'

const persistor = getPersistor();

function App() {
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

export default App;
