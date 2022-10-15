/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../assets/constants/responsive';
import CUSTOM_COLOR from '../../../assets/constants/colors';
import FONT_FAMILY from '../../../assets/constants/fonts';
import {
  IMG_Avatar,
  IMG_Bank,
  IMG_Card,
  IMG_Back,
  IMG_Paypal,
} from '../../../assets/images';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
  },
];
const Item = ({onPress, backgroundColor, borderColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.DotOutStyle, borderColor]}>
    <View style={[styles.DotInStyle, backgroundColor]} />
  </TouchableOpacity>
);
const Payment = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Concrete;
    const borderColor =
      item.id === selectedId ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Black;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{'My profile'}</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundInfo}>
        <Text style={styles.division}>{'Information'}</Text>
        <View style={styles.Index}>
          <Image style={styles.Avatar} source={IMG_Avatar} />
          <View style={styles.Story}>
            <Text style={styles.division}>{'Marvis Ighedosa'}</Text>
            <Text style={styles.content}>{'dosamarvis@gmail.com'}</Text>
            <Text style={styles.content}>
              {'No 15 uti street off ovie palace road effurun delta state'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.backgroundInfoPayment}>
        <Text style={styles.division}>{'Payment Method'}</Text>
        <View style={styles.IndexPayment}>
          <View style={styles.backgroundLeft}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={dot => dot.id}
              extraData={selectedId}
            />
          </View>
          <View style={styles.backgroundRight}>
            <View style={styles.backgroundMethod}>
              <View style={styles.Method}>
                <View style={styles.PaymentIconCard}>
                  <Image style={styles.Icon} source={IMG_Card} />
                </View>
                <Text style={styles.divisionPayment}>{'Card'}</Text>
              </View>
            </View>
            <View style={styles.backgroundMethod}>
              <View style={styles.Method}>
                <View style={styles.PaymentIconBank}>
                  <Image style={styles.Icon} source={IMG_Bank} />
                </View>
                <Text style={styles.divisionPayment}>{'Bank account'}</Text>
              </View>
            </View>
            <View style={styles.backgroundMethod}>
              <View
                style={{
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                  height: '100%',
                  width: '70%',
                  position: 'absolute',
                }}>
                <View style={styles.PaymentIconPaypal}>
                  <Image style={styles.Icon} source={IMG_Paypal} />
                </View>
                <Text style={styles.divisionPayment}>{'Paypal'}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Update'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 30,
    borderWidth: 2,
  },
  titleContainer: {
    top: scale(60),
    height: scale(40),
    width: '100%',
    position: 'absolute',
  },
  textTitle: {
    marginTop: scale(7),
    fontSize: scale(23),
    fontFamily: FONT_FAMILY.SFProTextBold,
    color: CUSTOM_COLOR.Black,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundInfo: {
    position: 'absolute',
    width: scale(315),
    height: scale(180),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    top: scale(170),
  },
  Index: {
    position: 'absolute',
    width: '100%',
    height: scale(160),
    top: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
  },
  Avatar: {
    width: scale(60),
    height: scale(60),
    top: scale(20),
    left: scale(16),
  },
  Story: {
    left: scale(91),
    width: scale(315) - scale(91),
    bottom: scale(40),
  },
  backgroundInfoPayment: {
    position: 'absolute',
    width: scale(315),
    height: scale(250),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    top: scale(400),
    flex: 1,
  },
  backgroundMethod: {
    flex: 1,
  },
  Method: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '70%',
    borderBottomWidth: 0.5,
    position: 'absolute',
  },
  PaymentIconCard: {
    width: scale(40),
    height: scale(40),
    borderRadius: 10,
    top: scale(20),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    position: 'absolute',
  },
  PaymentIconBank: {
    width: scale(40),
    height: scale(40),
    borderRadius: 10,
    top: scale(20),
    backgroundColor: CUSTOM_COLOR.FrenchRose,
    justifyContent: 'center',
    position: 'absolute',
  },
  PaymentIconPaypal: {
    width: scale(40),
    height: scale(40),
    borderRadius: 10,
    top: scale(20),
    backgroundColor: CUSTOM_COLOR.BlueRibbon,
    justifyContent: 'center',
    position: 'absolute',
  },
  Icon: {
    alignSelf: 'center',
    position: 'absolute',
  },
  IndexPayment: {
    position: 'absolute',
    width: '100%',
    height: scale(231),
    top: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
  },
  divisionPayment: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 16,
    color: CUSTOM_COLOR.Black,
    marginLeft: scale(50),
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  division: {
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
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    top: scale(775),
    alignSelf: 'center',
    position: 'absolute',
  },
  backgroundLeft: {
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    position: 'absolute',
  },
  backgroundRight: {
    height: '100%',
    width: '80%',
    marginLeft: scale(63),
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  DotOutStyle: {
    alignSelf: 'center',
    height: scale(20),
    width: scale(20),
    borderRadius: 90,
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: scale(50),
    bottom: scale(20),
  },
  DotInStyle: {
    alignSelf: 'center',
    height: scale(10),
    width: scale(10),
    borderRadius: 90,
  },
});