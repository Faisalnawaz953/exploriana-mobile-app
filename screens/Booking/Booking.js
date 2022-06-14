import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import Appbar from '../../components/AppBar/Appbar';
import CompanyCard from '../../components/CompanyCard';
import Toast from 'react-native-toast-message';
import useFetchLandingPage from '../../hooks/queries/landingPage/useFetchLandingPage';
import useFetchBookings from '../../hooks/queries/useFetchBookings';

export default function Booking({navigation}) {
  const {data: bookings, isLoading: isLandingLoading} = useFetchBookings();
  console.log(bookings);

  return (
    <View style={{flex: 1}}>
      <Toast />
      <Appbar />
      <View style={{marginTop: 30}} />
      {isLandingLoading ? (
        <ActivityIndicator style={{color: '#000', size: 30}} />
      ) : (
        <FlatList
          data={bookings?.booking}
          renderItem={({item}) => (
            <CompanyCard
              title={'5 day tour'}
              coverImage={
                item?.heroCoverImageUrl
                  ? {uri: item?.heroCoverImageUrl}
                  : require('../../assets/coverPlaceholder.png')
              }
              description={item?.status}
              onPress={() =>
                navigation.navigate('CompanyDetails', {landing: item})
              }
            />
          )}
        />
      )}
    </View>
  );
}
