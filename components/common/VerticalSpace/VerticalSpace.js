import React from 'react';
import {View, Text} from 'react-native';
import {verticalSpaceStyles} from './VerticalSpace.styles';

export default function VerticalSpace({space}) {
  return (
    <View style={verticalSpaceStyles(space ? space : 10).container}></View>
  );
}
