import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Warning from '../pages/Warning';
import TestDiabetes from '../pages/Diabetes';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Warning" component={Warning} />
        <Screen name="Diabetes" component={TestDiabetes} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;