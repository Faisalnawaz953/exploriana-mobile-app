import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import BackButton from '../../components/common/BackButton';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../../GlobalStyles.styles';
import ViewMoreText from 'react-native-view-more-text';
import Rating from '../../components/Rating';
import {styleConstants} from '../../Constants/StyleConstants';

export default function TourDetails({route, navigation}) {
  const {tour} = route?.params;

  const ViewMore = onPress => {
    return (
      <Text
        style={{color: 'blue', paddingHorizontal: 8, paddingBottom: 8}}
        onPress={onPress}>
        View more
      </Text>
    );
  };
  const ViewLess = onPress => {
    return (
      <Text
        style={{color: 'blue', paddingHorizontal: 8, paddingBottom: 8}}
        onPress={onPress}>
        View less
      </Text>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff', marginBottom: 25}}>
      <VerticalSpace space={60} />

      <BackButton onPress={() => navigation.goBack()} />

      <VerticalSpace space={30} />
      <View
        style={{
          width: '100%',
          alignSelf: 'center',

          overflow: 'hidden',
          height: 200,
        }}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={
            tour?.bannerImage
              ? {uri: tour?.bannerImage}
              : require('../../assets/coverPlaceholder.png')
          }></ImageBackground>
      </View>

      <VerticalSpace space={20} />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={globalStyles.mediumText}>{tour?.title}</Text>
          <Text style={globalStyles.mediumText}>PKR {tour?.price}</Text>
        </View>
        <VerticalSpace space={10} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '45%'}}>
            <Text
              style={[globalStyles.mediumText, {color: styleConstants.black}]}>
              From
            </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {tour?.fromCity.map(city => (
                <Text
                  style={{
                    padding: 8,
                    borderWidth: 2,
                    margin: 4,
                    borderRadius: 15,
                    color: styleConstants.primaryColor,
                    borderColor: styleConstants.primaryColor,
                  }}>
                  {city}
                </Text>
              ))}
            </View>
          </View>

          <View style={{width: '45%'}}>
            <Text
              style={[globalStyles.mediumText, {color: styleConstants.black}]}>
              To
            </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {tour?.toCity.map(city => (
                <Text
                  style={{
                    padding: 8,
                    borderWidth: 2,
                    margin: 4,
                    borderRadius: 15,
                    color: styleConstants.primaryColor,
                    borderColor: styleConstants.primaryColor,
                  }}>
                  {city}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <VerticalSpace space={10} />
        <Text style={[globalStyles.mediumText, {color: styleConstants.black}]}>
          Departure
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10,
          }}>
          <Text>
            <Text style={{fontWeight: 'bold'}}>On:</Text> {tour?.startDate}
          </Text>
          <Text style={{paddingHorizontal: 15}}>
            <Text style={{fontWeight: 'bold'}}>At:</Text> {tour?.startTime}
          </Text>
        </View>
        {tour?.daysPlan?.map((plan, i) => (
          <View
            style={{
              minHeight: 90,
              width: '100%',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#ddd',
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 1,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>Day {i + 1} Plan</Text>
            </View>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={ViewMore}
              renderViewLess={ViewLess}
              textStyle={{textAlign: 'justify', padding: 8}}>
              <Text>{plan}</Text>
            </ViewMoreText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
