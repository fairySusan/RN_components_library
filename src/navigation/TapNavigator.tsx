import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '@/pages/home/Home';
import User from '@/pages/user/User';
import ComList from '@/pages/comList/ComList';
import { Theme } from '@/assets/styles';

const Tab = createBottomTabNavigator();

export default function TapNavigation() {
  return (
    <Tab.Navigator screenOptions={ ({route}) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';
        let iconColor = color;
        switch(route.name) {
          case 'Home': iconName = 'home';
            break;
          case 'Component': iconName = 'sharealt';
            break;
          case 'User': iconName = 'user';
            break;
        }
        return <Icon name={iconName} size={size} color={iconColor} />;
      },
      
    })}
    tabBarOptions={{
      activeTintColor: Theme.ThemeColor,
      inactiveTintColor: 'gray',
      showLabel: true,
      labelStyle: styles.labelStyle
    }}
    >
      <Tab.Screen name="Home" component={Home}  options={{tabBarLabel: 'Home'}} />
      <Tab.Screen name="Component" component={ComList} options={{tabBarLabel: 'Component'}} />
      <Tab.Screen name="User" component={User} options={{tabBarLabel: 'User'}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#8a939b'
  }
})