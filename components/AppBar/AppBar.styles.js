import React from 'react';
import {StyleSheet} from 'react-native';
import {styleConstants} from '../../Constants/StyleConstants';

export const appBarStyles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.primaryColor,
    height: 80,
    marginTop: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 7,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
