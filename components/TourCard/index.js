import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {globalStyles} from '../../GlobalStyles.styles';
import {trimString} from '../../utils/global';
import {AirbnbRating} from 'react-native-ratings';
import Button from '../common/Button/Button';
import {styleConstants} from '../../Constants/StyleConstants';

export default function TourCard({
  onPress,
  title,
  description,
  coverImage,
  onBook,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginForm}>
      <Image
        style={{
          height: '65%',
          width: '100%',
          resizeMode: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        source={coverImage ? coverImage : require('../../assets/tour.jpeg')}
      />
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{width: '60%', textAlign: 'left'}}>
            {trimString(title)}
          </Text>
          <Button
            onPress={onBook}
            btnStyle={{width: 100, height: 40}}
            txtStyle={{fontSize: 16}}
            title={'Book Now'}
          />
        </View>
        <Text style={{color: styleConstants.primaryColor}}>
          PKR {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
