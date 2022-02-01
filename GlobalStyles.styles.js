import {StyleSheet} from 'react-native';
import {styleConstants} from './Constants/StyleConstants';

export const globalStyles = StyleSheet.create({
  largeText: {
    fontSize: 50,
    fontWeight: '600',

    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    color: styleConstants.primaryColor,
    elevation: 3,
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
