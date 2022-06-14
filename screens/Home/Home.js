import React from 'react';
import {View, Text} from 'react-native';
import Appbar from '../../components/AppBar/Appbar';
import {SliderBox} from 'react-native-image-slider-box';
import {globalStyles} from '../../GlobalStyles.styles';
import {styleConstants} from '../../Constants/StyleConstants';
import VerticalSpace from '../../components/common/VerticalSpace/VerticalSpace';
import Button from '../../components/common/Button/Button';
import useFetchUser from '../../hooks/queries/useFetchUser';
import useFetchToken from '../../hooks/queries/useFetchToken';

export default function Home({navigation}) {
  const [images, setImages] = React.useState([
    require('../../assets/Neelum.jpeg'),
    require('../../assets/skardu.jpeg'),
    require('../../assets/MalamJabba.jpeg'),
    require('../../assets/Murree.jpeg'),
  ]);
  const {data} = useFetchUser();
  const {token} = useFetchToken();
  console.log(token);

  return (
    <View style={{flex: 1}}>
      <Appbar />
      <SliderBox
        images={images}
        sliderBoxHeight={450}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={styleConstants.primaryColor}
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: styleConstants.primaryColor,
        }}
        ImageComponentStyle={{width: '100%', marginTop: 5}}
        imageLoadingColor={styleConstants.primaryColor}
      />
      <VerticalSpace space={20} />
      <Text style={[globalStyles.mediumText, {alignSelf: 'center'}]}>
        Pack and Go{' '}
      </Text>
      <VerticalSpace space={5} />
      <Text style={{textAlign: 'center'}}>
        {' '}
        is Pakistans's first online tour Booking App
      </Text>
      <Text style={{textAlign: 'center'}}>Search For</Text>
      <VerticalSpace space={30} />

      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Button
          title="Comapnies"
          btnStyle={{width: 120, height: 40}}
          txtStyle={{fontSize: 16}}
          onPress={() => navigation.navigate('Companies')}
        />
        <Button
          btnStyle={{width: 120, height: 40}}
          txtStyle={{fontSize: 16}}
          secondary
          title="Tours"
          onPress={() => navigation.navigate('Tours')}
        />
      </View>
    </View>
  );
}
