import React from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import MainNavigator from './navigation/Navigator';

export default function App() {
  return (
      <LinearGradient colors = {['#353544', '#1B1B23']} style = {{flex: 1}}>
        <MainNavigator/>
      </LinearGradient>
  );
}

