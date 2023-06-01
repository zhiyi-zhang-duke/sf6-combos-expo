import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/homescreen';
import CharacterScreen from './components/characterscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen name="character" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
