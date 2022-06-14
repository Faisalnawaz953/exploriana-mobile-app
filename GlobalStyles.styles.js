import {StyleSheet} from 'react-native';
import {styleConstants} from './Constants/StyleConstants';

export const globalStyles = StyleSheet.create({
  largeText: {
    fontSize: 40,
    fontWeight: '500',

    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    color: styleConstants.primaryColor,
    elevation: 1,
    fontFamily: styleConstants.fontFamily,
  },
  mediumText: {
    fontSize: 23,
    fontWeight: '500',

    color: styleConstants.primaryColor,

    fontFamily: styleConstants.fontFamily,
  },
  hyperLink: {
    fontSize: 20,
    opacity: 1,
    color: styleConstants.hyperlink,
    fontFamily: styleConstants.fontFamily,
  },
  errorText: {
    fontSize: 18,
    fontFamily: styleConstants.fontFamily,
    color: styleConstants.errorColor,
  },
});
