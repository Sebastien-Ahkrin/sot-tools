import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CookingTimers from './src/screens/CookingTimers';
import CookingTimer from './src/screens/CookingTimer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="cookingTimers"
          component={CookingTimers}
          options={{ title: 'Cooking timers' }}
        />
        <Stack.Screen
          name="cookingTimer"
          component={CookingTimer}
          options={{ title: 'Cooking timer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
