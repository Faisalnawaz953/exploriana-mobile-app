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

export default function CompanyDetails({route, navigation}) {
  const {landing} = route?.params;

  const videoRef = useRef();
  const [paused, setPaused] = React.useState(true);
  const [fullscreen, setFullScreen] = React.useState(false);
  const ViewMore = onPress => {
    return (
      <Text style={{color: 'blue'}} onPress={onPress}>
        View more
      </Text>
    );
  };
  const ViewLess = onPress => {
    return (
      <Text style={{color: 'blue'}} onPress={onPress}>
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
            landing?.heroCoverImageUrl
              ? {uri: landing?.heroCoverImageUrl}
              : require('../../assets/coverPlaceholder.png')
          }>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                resizeMode: 'cover',
                borderWidth: 5,
                borderColor: '#ddd',
              }}
              source={
                landing?.brandLogoUrl
                  ? {uri: landing?.brandLogoUrl}
                  : require('../../assets/placeholderProfile.png')
              }
            />
            <Text style={globalStyles?.mediumText}>{landing?.brandName}</Text>
          </View>
        </ImageBackground>
      </View>

      <Text style={[globalStyles.mediumText, {padding: 20}]}>
        Trailer Video
      </Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderRadius: 12,
          position: 'relative',
        }}>
        {paused && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '30%',
              left: '45%',

              zIndex: 1,
            }}
            onPress={e => {
              e.stopPropagation();
              setPaused(!paused);
            }}>
            <Icon name="play" size={30} color="#fff" />
          </TouchableOpacity>
        )}
        {!paused && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 70,
              right: 20,
              zIndex: 1,
            }}
            onPress={e => {
              e.stopPropagation();
              setFullScreen(true);
            }}>
            <MIcon name="fullscreen" size={35} color="#fff" />
          </TouchableOpacity>
        )}

        <Video
          onFullscreenPlayerDidDismiss={() => {
            setFullScreen(false);
            setPaused(true);
          }}
          ref={videoRef}
          style={{
            width: '100%',
            height: 195,
            borderRadius: 12,
            overflow: 'hidden',
          }}
          fullscreen={fullscreen}
          paused={paused}
          source={{
            uri: landing?.heroTrailerVideoUrl
              ? landing?.heroTrailerVideoUrl
              : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }} // Can be a URL or a local file.
        />
        <VerticalSpace space={20} />
        {landing?.heroDescription && (
          <>
            <Text style={globalStyles.mediumText}>Comapany description</Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={ViewMore}
              renderViewLess={ViewLess}
              textStyle={{textAlign: 'justify'}}>
              <Text>{landing?.heroDescription}</Text>
            </ViewMoreText>
          </>
        )}
      </View>
      <VerticalSpace space={20} />
      {landing?.showReview && (
        <>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </>
      )}
    </ScrollView>
  );
}
