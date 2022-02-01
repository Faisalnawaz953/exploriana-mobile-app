import React from 'react';
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.styles';
import {styleConstants} from '../../../Constants/StyleConstants';

export const buttonStyles = (secondary, outlined) =>
  StyleSheet.create({
    small: {
      borderWidth: 2,
      backgroundColor: outlined
        ? '#fff'
        : secondary
        ? styleConstants.secondaryColor
        : styleConstants.primaryColor,
      width: 150,
      height: 50,
      borderRadius: 5,
      color: outlined
        ? secondary
          ? styleConstants.secondaryColor
          : styleConstants.primaryColor
        : '#fff',
      borderColor: secondary
        ? styleConstants.secondaryColor
        : styleConstants.primaryColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: outlined
        ? secondary
          ? styleConstants.secondaryColor
          : styleConstants.primaryColor
        : '#fff',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 1,
    },
  });
