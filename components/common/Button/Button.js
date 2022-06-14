import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.styles';
import {appConstants} from '../../../Constants/AppConstants';

import {styleConstants} from '../../../Constants/StyleConstants';
import {buttonStyles} from './Button.styles';

export default function Button({
  outlined,
  secondary,
  title,
  onPress,
  loading,
  btnStyle,
  txtStyle,
}) {
  return (
    <TouchableOpacity
      onTouchEnd={e => {
        e.stopPropagation();
      }}
      onPress={onPress ? onPress : () => {}}
      style={[buttonStyles(secondary, outlined).small, btnStyle]}>
      <Text
        style={[
          globalStyles.mediumText,
          {
            color: outlined
              ? secondary
                ? styleConstants.secondaryColor
                : styleConstants.primaryColor
              : '#fff',
          },
          txtStyle,
        ]}>
        {loading ? (
          <ActivityIndicator
            color={
              outlined
                ? secondary
                  ? styleConstants.secondaryColor
                  : styleConstants.primaryColor
                : '#fff'
            }
          />
        ) : title ? (
          title
        ) : (
          appConstants
        )}
      </Text>
    </TouchableOpacity>
  );
}
