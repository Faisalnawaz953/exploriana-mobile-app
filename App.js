/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import Router from './router';
const AuthStack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;
