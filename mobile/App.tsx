import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}