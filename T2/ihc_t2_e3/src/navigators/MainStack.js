import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';

const StackNavigator = createStackNavigator();

export default function MainStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='HomeScreen' component={HomeScreen} />
      <StackNavigator.Screen name='ResultScreen' component={ResultScreen} />
    </StackNavigator.Navigator>
  );
}
