import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.styles';
import {appConstants} from '../../../Constants/AppConstants';

import {styleConstants} from '../../../Constants/StyleConstants';
import {buttonStyles} from './Button.styles';

export default function Button({outlined, secondary, title, onPress, loading}) {
  return (
    <View
      onTouchStart={onPress ? onPress : () => {}}
      style={buttonStyles(secondary, outlined).small}>
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
    </View>
  );
}
