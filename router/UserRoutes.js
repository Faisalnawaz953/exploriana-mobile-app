import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';

import SignUp from '../screens/SignUp/SignUp';

import MyTabs from './BottomNavigator';
import CompanyDetails from '../screens/Companies/CompanyDetails';
import TourDetails from '../screens/Tour/TourDetails';
import CreateBooking from '../screens/Booking/CreateBooking';

const UserStack = createNativeStackNavigator();
export default function UserRoutes() {
  return (
    <UserStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <UserStack.Screen name={'Tabs'} component={MyTabs} />
      <UserStack.Screen name={'CompanyDetails'} component={CompanyDetails} />
      <UserStack.Screen name={'TourDetails'} component={TourDetails} />
      <UserStack.Screen name={'Login'} component={Login} />
      <UserStack.Screen name={'Register'} component={SignUp} />
      <UserStack.Screen name={'CreateBooking'} component={CreateBooking} />
    </UserStack.Navigator>
  );
}
