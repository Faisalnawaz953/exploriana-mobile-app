import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {globalStyles} from '../../GlobalStyles.styles';
import {trimString} from '../../utils/global';
import {AirbnbRating} from 'react-native-ratings';

export default function CompanyCard({
  onPress,
  title,
  description,
  coverImage,
  rating = 3,
  showReview,
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
          <Text style={globalStyles.mediumText}>{title}</Text>
          {showReview && (
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={rating ? rating : 3}
              isDisabled
              size={20}
            />
          )}
        </View>
        <Text style={{width: '80%', textAlign: 'left'}}>
          {trimString(description, 35)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
