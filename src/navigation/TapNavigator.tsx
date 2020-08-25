import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '@/pages/home/Home';
import ComList from '@/pages/comList/ComList';

const Tab = createBottomTabNavigator();

export default function TapNavigation() {
  return (
    <Tab.Navigator screenOptions={ ({route}) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';
        let iconColor = color;
        if (route.name === '首页') {
          iconName = 'timer';
        } else if (route.name === '组件') {
          iconName = 'trail-sign';
        }

        return <Ionicons name={iconName} size={size} color={iconColor} />;
      },
      
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="组件" component={ComList}/>
    </Tab.Navigator>
  );
}