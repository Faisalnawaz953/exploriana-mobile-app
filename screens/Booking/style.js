import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    padding: 20,
    height: 700,
    width: '95%',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
});
