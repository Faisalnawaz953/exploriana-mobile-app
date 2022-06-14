import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import Appbar from '../../components/AppBar/Appbar';
import TourCard from '../../components/TourCard';
import useFetchTours from '../../hooks/queries/useFetchTour';
import useFetchToken from '../../hooks/queries/useFetchToken';
import {readFromLocalStorage} from '../../utils/localStorage';

export default function Tour({navigation}) {
  const {data: tours, isLoading: loadingTours} = useFetchTours();
  const {data: token} = useFetchToken();

  return (
    <View style={{flex: 1}}>
      {/* <Toast /> */}
      <Appbar />
      <View style={{marginTop: 30}} />

      {loadingTours ? (
        <ActivityIndicator style={{color: '#000', size: 30}} />
      ) : (
        <FlatList
          data={tours?.tours}
          renderItem={({item}) => (
            <TourCard
              onBook={e => {
                if (token) {
                  navigation.navigate('CreateBooking', {item});
                } else {
                  navigation.navigate('Login');
                }
              }}
              onPress={e => {
                navigation.navigate('TourDetails', {tour: item});
              }}
              title={item?.title}
              description={item?.price}
              coverImage={
                item?.bannerImage
                  ? {uri: item?.bannerImage}
                  : require('../../assets/coverPlaceholder.png')
              }
            />
          )}
        />
      )}
    </View>
  );
}
