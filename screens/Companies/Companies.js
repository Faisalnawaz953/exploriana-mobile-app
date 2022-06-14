import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import Appbar from '../../components/AppBar/Appbar';
import CompanyCard from '../../components/CompanyCard';
import Toast from 'react-native-toast-message';
import useFetchLandingPage from '../../hooks/queries/landingPage/useFetchLandingPage';

export default function Companies({navigation}) {
  const {data: landingPages, isLoading: isLandingLoading} =
    useFetchLandingPage();

  return (
    <View style={{flex: 1}}>
      <Toast />
      <Appbar />
      <View style={{marginTop: 30}} />
      {isLandingLoading ? (
        <ActivityIndicator style={{color: '#000', size: 30}} />
      ) : (
        <FlatList
          data={landingPages}
          renderItem={({item}) => (
            <CompanyCard
              title={item?.brandName}
              coverImage={
                item?.heroCoverImageUrl
                  ? {uri: item?.heroCoverImageUrl}
                  : require('../../assets/coverPlaceholder.png')
              }
              description={item?.heroDescription}
              showReview={item?.showReview}
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
