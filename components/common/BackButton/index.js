import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BackButton({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 35,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,
        display: 'flex',
        marginVertical: 10,
        marginHorizontal: 15,
      }}>
      <Icon name="arrow-back" size={30} />
    </TouchableOpacity>
  );
}
