import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Theme } from '@/assets/styles';
import { NavigationContainer } from '@react-navigation/native';

import Main from './TapNavigator';
import PageListscreen from '@/pages/comList/PageList';
import InputScreen from '@/pages/comList/Input';

const Stack = createStackNavigator();

function StackNavigation() {
  const commomHeader:StackHeaderOptions = {
    headerTitleAlign: 'center',
    headerStyle: { 
      backgroundColor: Theme.ThemeColor
    },
    headerTitleStyle: {
      fontSize: Theme.FontTitleSize,
      color: '#fff',
    },
    headerTintColor: '#fff'
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="pageList"
          component={PageListscreen}
          options={{title: '下拉刷新列表', ...commomHeader}}
        />
        <Stack.Screen
          name="input"
          component={InputScreen}
          options={{title: 'input', ...commomHeader}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
