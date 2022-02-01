import {StyleSheet} from 'react-native';
import {styleConstants} from '../../../Constants/StyleConstants';

export const textFieldStyles = startIcon =>
  StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    },
    input: {
      paddingLeft: startIcon ? 30 : 5,
      padding: 5,
      fontSize: 30,
      borderBottomColor: styleConstants.primaryColor,
      borderBottomWidth: 2,
      borderBottomEndRadius: 2,
      borderBottomStartRadius: 2,
      width: '100%',
      marginTop: 15,
      marginBottom: 15,
      fontFamily: styleConstants.fontFamily,
    },
    endIcon: {
      position: 'absolute',
      right: 0,
      bottom: 30,
    },
    startIcon: {
      position: 'absolute',
      left: 0,
      bottom: 26,
    },

    forgetPasswordText: {
      position: 'absolute',
      right: 0,
      color: '#0645AD',
      bottom: -20,
      borderBottomColor: '#0645AD',
      borderBottomWidth: 2,
    },
  });
