import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import TextField from '../../components/common/TextField/TextField';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import {globalStyles} from '../../GlobalStyles.styles';
import {signUpStyles} from './SignUp.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleConstants} from '../../Constants/StyleConstants';
import Button from '../../components/common/Button/Button';
import {
  appRoutes,
  NETWORK_ERROR,
  TOAST_TYPES,
} from '../../Constants/AppConstants';
import RadioForm from 'react-native-simple-radio-button';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signUpApi} from '../../apis/LandingPage/LandingPage';
import showToast from '../../helpers/Toast';
import {wirteToLocalStorage} from '../../utils/localStorage';
import Toast from 'react-native-toast-message';
export const signUpValidation = yup.object().shape({
  fullName: yup.string().required('required'),
  email: yup.string().email('Enter valid Email').required('required'),
  password: yup.string().min(8, 'Minimum 8 digits'),
});

var radio_props = [
  {label: 'Male  ', value: 'male'},
  {label: 'Female  ', value: 'female'},
  {label: 'Other  ', value: 'other'},
];

export default function SignUp({navigation}) {
  const [gender, setGender] = useState('male');
  const [loading, setLoading] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={signUpStyles.container}>
        <View style={signUpStyles.loginForm}>
          <Text style={globalStyles.largeText}>Register </Text>
          <VerticalSpace space={40} />
          <Formik
            onSubmit={async values => {
              const data = {
                email: values.email,
                password: values.password,
                fullName: values.fullName,
                gender: gender,
              };
              setLoading(true);
              const res = await signUpApi(data);
              console.log(res);

              if (res?.success) {
                setLoading(false);
                showToast(
                  TOAST_TYPES.SUCCESS,
                  TOAST_TYPES.SUCCESS,
                  'User Created Successfully',
                );
                wirteToLocalStorage('token', res?.token);
                wirteToLocalStorage('userId', res?.user?._id);
              } else {
                // console.log(res);
                setLoading(false);
                showToast(
                  TOAST_TYPES.ERROR,
                  TOAST_TYPES.ERROR,
                  'Fail To create User',
                );
              }
            }}
            validationSchema={signUpValidation}
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}>
            {props => (
              <>
                <Toast />
                <TextField
                  onBlur={() => props?.setFieldTouched('fullName')}
                  value={props?.values?.fullName}
                  onChange={props?.handleChange('fullName')}
                  placeholder="Full Name"
                  startIcon={
                    <Icon
                      name="user"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                />

                {props?.errors?.fullName && props?.touched?.fullName && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.fullName}
                  </Text>
                )}
                <TextField
                  onBlur={() => props?.setFieldTouched('email')}
                  value={props?.values?.email}
                  onChange={props?.handleChange('email')}
                  placeholder="Email"
                  startIcon={
                    <Icon
                      name="envelope"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                />

                {props?.errors?.email && props?.touched?.email && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.email}
                  </Text>
                )}
                <TextField
                  startIcon={
                    <Icon
                      name="key"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                  onBlur={() => props?.setFieldTouched('password')}
                  value={props?.values?.password}
                  onChange={props?.handleChange('password')}
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

                {props?.errors?.password && props?.touched?.password && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.password}
                  </Text>
                )}
                <TextField
                  startIcon={
                    <Icon
                      name="key"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                  onBlur={() => props?.setFieldTouched('confirmPassword')}
                  value={props?.values?.confirmPassword}
                  onChange={props?.handleChange('confirmPassword')}
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
                {props?.touched?.confirmPassword &&
                  props?.values?.password !==
                    props?.values?.confirmPassword && (
                    <Text
                      style={{
                        color: 'red',
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                      }}>
                      Password Did Not Matched
                    </Text>
                  )}
                <VerticalSpace space={10} />
                <View style={{width: '100%', height: 40}}>
                  <Text
                    style={[
                      globalStyles.mediumText,
                      {position: 'absolute', left: 0},
                    ]}>
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
                    onPress={props?.handleSubmit}
                    title={
                      loading ? (
                        <ActivityIndicator color={'#fff'} size={30} />
                      ) : (
                        'Register'
                      )
                    }
                    secondary
                  />
                  <Button
                    title="Log In"
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
