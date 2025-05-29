/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput, Button
} from 'react-native';
import React, { useState } from 'react';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {

 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
         <Stack.Screen name="Profile" component={Profile}   options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});


export default App;

