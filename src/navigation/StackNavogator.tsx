import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import Main from './TapNavigator';
import Home from '@/pages/home/Home';
import PageListscreen from '@/pages/comList/PageList';
import PageList2screen from '@/pages/comList/PageList2';
import { Theme } from '@/assets/styles';
import { NavigationContainer } from '@react-navigation/native';

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
          name="pageList2"
          component={PageList2screen}
          options={{title: '下拉刷新列表2', ...commomHeader}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
