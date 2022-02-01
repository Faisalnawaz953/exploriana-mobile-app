import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../GlobalStyles.styles';
import {appBarStyles} from './AppBar.styles';

export default function Appbar() {
  return (
    <View style={appBarStyles.container}>
      <Text style={[globalStyles.largeText, {color: '#fff'}]}>Pack and Go</Text>
    </View>
  );
}
