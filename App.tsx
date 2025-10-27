import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export type RootStackParamList = {
  StartScreen: undefined;
  Main: undefined;
  DetailBali: {
    title: string;
    country: string;
    imageUrl: string;
    rating: number;
    price: number;
    description: string;
  };
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
