import React from 'react';
import {View, Text} from 'react-native';
import TextField from '../../components/common/TextField/TextField';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import {globalStyles} from '../../GlobalStyles.styles';
import {loginStyles} from './Login.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleConstants} from '../../Constants/StyleConstants';
import Button from '../../components/common/Button/Button';
import {appRoutes} from '../../Constants/AppConstants';

export default function Login({navigation}) {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.loginForm}>
        <Text style={globalStyles.largeText}>Login</Text>
        <VerticalSpace space={40} />
        <TextField
          placeholder="Email"
          startIcon={
            <Icon
              name="envelope"
              size={23}
              color={styleConstants.primaryColor}
            />
          }
        />

        <TextField
          startIcon={
            <Icon name="key" size={23} color={styleConstants.primaryColor} />
          }
          isPassword={true}
          placeholder="Password"
          endIcon={
            <Icon
              name="eye-slash"
              size={23}
              color={styleConstants.primaryColor}
            />
          }
        />
        <VerticalSpace space={80} />
        <View style={loginStyles.btnContainer}>
          <Button
            title="Log In"
            onPress={() => navigation.navigate(appRoutes.HOME)}
          />
          <Button
            onPress={() => navigation.navigate(appRoutes.REGISTER)}
            title={'Register'}
            secondary
          />
        </View>
      </View>
    </View>
  );
}
