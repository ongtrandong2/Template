import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import scale from '../../assets/constants/responsive';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import {IMG_Food, IMG_Back, IMG_BlackHeart} from '../../assets/images';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const data = [
  {source: IMG_Food, id: 0},
  {source: IMG_Food, id: 1},
];

const ProductDetail = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const [dotActive, setDotActive] = useState(0);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== dotActive) {
        setDotActive(slide);
      }
      console.log(slide, dotActive);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.HeartButton}>
          <Image source={IMG_BlackHeart} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap}>
        <ScrollView
          onScrollEndDrag={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {data.map(item => (
            <View style={styles.imageFood}>
              <Image
                key={item.id}
                resizeMode="stretch"
                style={styles.food}
                source={item.source}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data.map(item => (
            <Text
              key={item.id}
              style={{
                color:
                  dotActive === item.id
                    ? CUSTOM_COLOR.SunsetOrange
                    : 'tranperant',
                padding: scale(1),
              }}>
              ●
            </Text>
          ))}
        </View>
      </View>
      <View>
        <View style={styles.backgroundName}>
          <Text style={styles.textFoodContainer}>Veggie tomato mix</Text>
        </View>
        <View style={styles.backgroundPrice}>
          <Text style={styles.textPriceContainer}>$1,900</Text>
        </View>
      </View>
      <View style={styles.backgroundInfo}>
        <Text style={styles.division}>Delivery info</Text>
        <Text style={styles.content}>
          {'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm.'}
        </Text>
        <Text style={styles.division}>Return policy</Text>
        <Text style={styles.content}>
          {
            'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.'
          }
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Add to cart'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    top: scale(30),
    height: scale(40),
    width: '100%',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  HeartButton: {
    height: '100%',
    width: scale(50),
    right: scale(60),
    marginTop: scale(10),
    position: 'absolute',
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  imageFood: {
    width: WIDTH,
    height: HEIGHT * 0.32,
    justifyContent: 'center',
  },
  food: {
    borderRadius: scale(105),
    alignSelf: 'center',
  },
  wrapDot: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
  backgroundName: {
    width: '60%',
    height: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  backgroundPrice: {
    width: '40%',
    height: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'center',
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 15,
    alignSelf: 'center',
    lineHeight: 20,
  },
  backgroundInfo: {
    width: '80%',
    height: scale(100),
    alignSelf: 'center',
    marginTop: scale(10),
  },
  division: {
    marginTop: scale(20),
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 16,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  content: {
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(180),
    alignSelf: 'center',
  },
});
