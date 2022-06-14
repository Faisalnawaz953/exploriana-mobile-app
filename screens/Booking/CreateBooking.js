import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import BackButton from '../../components/common/BackButton';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import Icon from 'react-native-vector-icons/Ionicons';

import {globalStyles} from '../../GlobalStyles.styles';
import ViewMoreText from 'react-native-view-more-text';
import Rating from '../../components/Rating';
import Button from '../../components/common/Button/Button';
import TextField from '../../components/common/TextField/TextField';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signUpStyles} from './style';
import Toast from 'react-native-toast-message';
import {styleConstants} from '../../Constants/StyleConstants';
import {readFromLocalStorage} from '../../utils/localStorage';
import showToast from '../../helpers/Toast';
import {TOAST_TYPES} from '../../Constants/AppConstants';
import {createBooking} from '../../apis/LandingPage/LandingPage';
export const bookingValidation = yup.object().shape({
  CNIC: yup
    .string()
    .required('required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(13, 'Must be exactly 13 digits')
    .max(13, 'Must be exactly 13 digits'),
  phoneNumber: yup
    .string()
    .required('required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(11, 'Must be exactly 11 digits')
    .max(11, 'Must be exactly 11 digits'),
  noofPeople: yup
    .string()
    .required('required')
    .matches(/^[0-9]+$/, 'Must be only digits'),
});

export default function CreateBooking({route, navigation}) {
  const [loading, setLoading] = React.useState(false);
  const {item} = route?.params;

  console.log(item);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff', marginBottom: 25}}>
      <VerticalSpace space={60} />

      <BackButton onPress={() => navigation.goBack()} />

      <View style={signUpStyles.container}>
        <View style={signUpStyles.loginForm}>
          <Text style={globalStyles.largeText}>Create Booking </Text>
          <VerticalSpace space={40} />
          <Formik
            onSubmit={async values => {
              const uid = await readFromLocalStorage('userId');
              const data = {
                userId: uid,
                cnic: values?.CNIC,
                phoneNumber: values?.phoneNumber,
                persons: values?.noofPeople,
                companyId: item?.userId,
                tripId: item?._id,
              };
              setLoading(true);
              const res = await createBooking(data);
              console.log(res);

              if (res?.success) {
                setLoading(false);
                showToast(
                  TOAST_TYPES.SUCCESS,
                  TOAST_TYPES.SUCCESS,
                  'Booking Created Successfully',
                );
                navigation.navigate('Bookings');
              } else {
                setLoading(false);
                showToast(
                  TOAST_TYPES.ERROR,
                  TOAST_TYPES.ERROR,
                  'Fail To create Booking',
                );
              }
            }}
            validationSchema={bookingValidation}
            initialValues={{
              CNIC: '',
              phoneNumber: '',
              noofPeople: '',
            }}>
            {props => (
              <>
                <Toast />
                <TextField
                  onBlur={() => props?.setFieldTouched('phoneNumber')}
                  value={props?.values?.phoneNumber}
                  onChange={props?.handleChange('phoneNumber')}
                  placeholder="Phone Number"
                />

                {props?.errors?.phoneNumber && props?.touched?.phoneNumber && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.phoneNumber}
                  </Text>
                )}
                <TextField
                  onBlur={() => props?.setFieldTouched('noofPeople')}
                  value={props?.values?.noofPeople}
                  onChange={props?.handleChange('noofPeople')}
                  placeholder="Persons"
                />

                {props?.errors?.noofPeople && props?.touched?.noofPeople && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.noofPeople}
                  </Text>
                )}
                <TextField
                  onBlur={() => props?.setFieldTouched('CNIC')}
                  value={props?.values?.CNIC}
                  onChange={props?.handleChange('CNIC')}
                  placeholder="CNIC"
                />

                {props?.errors?.CNIC && props?.touched?.CNIC && (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {props?.errors?.CNIC}
                  </Text>
                )}

                <VerticalSpace space={10} />

                <VerticalSpace space={70} />
                <View style={signUpStyles.btnContainer}>
                  <Button
                    title={
                      !loading ? (
                        'Create'
                      ) : (
                        <ActivityIndicator color={'#fff'} size={30} />
                      )
                    }
                    onPress={props?.handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>

      <VerticalSpace space={30} />
    </ScrollView>
  );
}
