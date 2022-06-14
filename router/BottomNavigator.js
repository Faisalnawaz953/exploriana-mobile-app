import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styleConstants} from '../Constants/StyleConstants';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Companies from '../screens/Companies/Companies';
import Tour from '../screens/Tour/Tour';
import Home from '../screens/Home/Home';
import Booking from '../screens/Booking/Booking';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused
                  ? styleConstants.primaryColor
                  : styleConstants.black,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                color={
                  focused ? styleConstants.primaryColor : styleConstants.black
                }
                size={20}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused
                  ? styleConstants.primaryColor
                  : styleConstants.black,
              }}>
              Companies
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="industry"
                color={
                  focused ? styleConstants.primaryColor : styleConstants.black
                }
                size={20}
              />
            </View>
          ),
        }}
        name="Companies"
        component={Companies}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused
                  ? styleConstants.primaryColor
                  : styleConstants.black,
              }}>
              Tours
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialIcons
                name="tour"
                color={
                  focused ? styleConstants.primaryColor : styleConstants.black
                }
                size={20}
              />
            </View>
          ),
        }}
        name="Tours"
        component={Tour}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused
                  ? styleConstants.primaryColor
                  : styleConstants.black,
              }}>
              Bookings
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialIcons
                name="book"
                color={
                  focused ? styleConstants.primaryColor : styleConstants.black
                }
                size={20}
              />
            </View>
          ),
        }}
        name="Bookings"
        component={Booking}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
