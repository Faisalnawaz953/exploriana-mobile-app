import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../GlobalStyles.styles';
import useFetchToken from '../../hooks/queries/useFetchToken';
import {appBarStyles} from './AppBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  deleteFromLocalStorage,
  readFromLocalStorage,
} from '../../utils/localStorage';
import showToast from '../../helpers/Toast';
import {TOAST_TYPES} from '../../Constants/AppConstants';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {QueryClient} from 'react-query';

export default function Appbar() {
  const queryClient = new QueryClient();
  const [appToken, setAppToken] = React.useState();
  const {data: token} = useFetchToken();

  const navigation = useNavigation();
  const getToken = async () => {
    const token = await readFromLocalStorage('token');
    console.log(token);
    return token;
  };

  useEffect(() => {
    setAppToken(token);
  }, [token]);
  const handleLogout = () => {
    deleteFromLocalStorage('token');
    deleteFromLocalStorage('userId');
    showToast(
      TOAST_TYPES.SUCCESS,
      TOAST_TYPES.SUCCESS,
      'User Log Out SuccessFully',
    );
    queryClient.invalidateQueries('token');
    queryClient.invalidateQueries('userId');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };
  return (
    <View style={appBarStyles.container}>
      <Toast />
      <Text style={[globalStyles.largeText, {color: '#fff'}]}>Pack and Go</Text>
      <TouchableOpacity
        onPress={
          getToken() !== null
            ? () => handleLogout()
            : () => navigation.navigate('Login')
        }>
        <Icon name={appToken ? 'log-out' : 'log-in'} size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
}
