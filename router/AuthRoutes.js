import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp/SignUp';
import {appRoutes} from '../Constants/AppConstants';
import Home from '../screens/Home/Home';

const AuthStack = createNativeStackNavigator();
export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={appRoutes.LOGIN} component={Login} />
      <AuthStack.Screen name={appRoutes.REGISTER} component={SignUp} />
      <AuthStack.Screen name={appRoutes.HOME} component={Home} />
    </AuthStack.Navigator>
  );
}
