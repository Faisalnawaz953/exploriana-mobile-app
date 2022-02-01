import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TextField from '../../components/common/TextField/TextField';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import {globalStyles} from '../../GlobalStyles.styles';
import {signUpStyles} from './SignUp.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleConstants} from '../../Constants/StyleConstants';
import Button from '../../components/common/Button/Button';
import {appRoutes} from '../../Constants/AppConstants';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Male  ', value: 'male'},
  {label: 'Female  ', value: 'female'},
  {label: 'Other  ', value: 'other'},
];

export default function SignUp({navigation}) {
  const [gender, setGender] = useState('male');
  return (
    <View style={signUpStyles.container}>
      <View style={signUpStyles.loginForm}>
        <Text style={globalStyles.largeText}>Register </Text>
        <VerticalSpace space={40} />
        <TextField
          placeholder="Full Name"
          startIcon={
            <Icon name="user" size={23} color={styleConstants.primaryColor} />
          }
        />

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
        <TextField
          startIcon={
            <Icon name="key" size={23} color={styleConstants.primaryColor} />
          }
          isPassword={true}
          placeholder="Confirm Password"
          endIcon={
            <Icon
              name="eye-slash"
              size={23}
              color={styleConstants.primaryColor}
            />
          }
        />
        <VerticalSpace space={10} />
        <View style={{width: '100%', height: 40}}>
          <Text
            style={[globalStyles.mediumText, {position: 'absolute', left: 0}]}>
            Gender:
          </Text>
        </View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            setGender(value);
          }}
          labelStyle={globalStyles.mediumText}
          formHorizontal={true}
          selectedButtonColor={styleConstants.primaryColor}
          buttonColor={styleConstants.primaryColor}
        />

        <VerticalSpace space={70} />

        <View style={signUpStyles.btnContainer}>
          <Button
            onPress={() => navigation.navigate(appRoutes.REGISTER)}
            title={'Register'}
            secondary
          />
          <Button
            title="Log In"
            onPress={() => navigation.navigate(appRoutes.LOGIN)}
          />
        </View>
      </View>
    </View>
  );
}
