/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import Router from './router';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;
