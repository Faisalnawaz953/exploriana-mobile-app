import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.styles';
import {styleConstants} from '../../../Constants/StyleConstants';
import {textFieldStyles} from './TextField.styles';

export default function TextField({
  placeholder,
  style,
  isPassword,
  onChange,
  onBlur,
  value,
  endIcon,
  startIcon,
  error,
  showForget,
}) {
  return (
    <View>
      <View style={textFieldStyles(startIcon).container}>
        {startIcon && (
          <Text style={textFieldStyles(startIcon).startIcon}>{startIcon}</Text>
        )}
        <TextInput
          value={value}
          style={style ? style : textFieldStyles(startIcon).input}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={isPassword}
          placeholder={placeholder ? placeholder : styleConstants.placeholder}
        />
        {endIcon && (
          <Text style={textFieldStyles(startIcon).endIcon}>{endIcon}</Text>
        )}
      </View>
      {showForget && isPassword && (
        <View style={textFieldStyles(startIcon).forgetPasswordText}>
          <Text style={globalStyles.hyperLink}>Forget Password?</Text>
        </View>
      )}
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
}
