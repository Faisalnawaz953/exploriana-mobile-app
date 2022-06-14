import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import TextField from '../../components/common/TextField/TextField';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import {globalStyles} from '../../GlobalStyles.styles';
import {loginStyles} from './Login.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleConstants} from '../../Constants/StyleConstants';
import Button from '../../components/common/Button/Button';
import {appRoutes, TOAST_TYPES} from '../../Constants/AppConstants';
import {Formik} from 'formik';
import * as yup from 'yup';
import {wirteToLocalStorage} from '../../utils/localStorage';
import {login} from '../../apis/LandingPage/LandingPage';
import Toast from 'react-native-toast-message';
import showToast from '../../helpers/Toast';
export const loginValidation = yup.object().shape({
  email: yup.string().email('Enter valid Email').required('required'),
  password: yup.string().min(8, 'Minimum 8 digits'),
});
export default function Login({navigation}) {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.loginForm}>
        <Text style={globalStyles.largeText}>Login</Text>
        <VerticalSpace space={40} />

        <Formik
          validationSchema={loginValidation}
          initialValues={{email: '', password: ''}}
          onSubmit={async values => {
            const data = {
              email: values.email,
              password: values.password,
            };
            setLoading(true);
            const res = await login(data);

            if (res?.success) {
              setLoading(false);
              showToast(
                TOAST_TYPES.SUCCESS,
                TOAST_TYPES.SUCCESS,
                'User Login Successfully',
              );
              navigation.navigate('Home');
              wirteToLocalStorage('token', res?.token);
              wirteToLocalStorage('userId', res?.user?._id);
              console.log('res?.user?._id', res?.user?._id);
            } else {
              // console.log(res);
              setLoading(false);
              showToast(
                TOAST_TYPES.ERROR,
                TOAST_TYPES.ERROR,
                'Invalid User Name or password',
              );
            }
          }}>
          {props => {
            return (
              <>
                <Toast />
                <TextField
                  placeholder="Email"
                  startIcon={
                    <Icon
                      name="envelope"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                  onBlur={() => props?.setFieldTouched('email')}
                  value={props?.values?.email}
                  onChange={props?.handleChange('email')}
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
                  isPassword={true}
                  placeholder="Password"
                  endIcon={
                    <Icon
                      name="eye-slash"
                      size={23}
                      color={styleConstants.primaryColor}
                    />
                  }
                  onBlur={() => props?.setFieldTouched('password')}
                  value={props?.values?.password}
                  onChange={props?.handleChange('password')}
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
                <VerticalSpace space={80} />
                <View style={loginStyles.btnContainer}>
                  <Button
                    title={
                      loading ? (
                        <ActivityIndicator color={'#fff'} size={30} />
                      ) : (
                        'Log In'
                      )
                    }
                    onPress={props?.handleSubmit}
                  />
                  <Button
                    onPress={() => navigation.navigate('Register')}
                    title={'Register'}
                    secondary
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}
