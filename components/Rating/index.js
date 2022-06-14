import {View, Text} from 'react-native';
import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';

export default function Rating({rating = 3, user = 'pkg@21', comment}) {
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
    <View
      style={{
        minHeight: 90,
        width: '90%',
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
        <Text style={{fontWeight: 'bold'}}>{user}</Text>
        <AirbnbRating
          count={5}
          showRating={false}
          defaultRating={rating ? rating : 3}
          isDisabled
          size={20}
        />
      </View>
      <ViewMoreText
        numberOfLines={2}
        renderViewMore={ViewMore}
        renderViewLess={ViewLess}
        textStyle={{textAlign: 'justify', padding: 8}}>
        <Text>
          {comment
            ? comment
            : 'Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos'}
        </Text>
      </ViewMoreText>
    </View>
  );
}
