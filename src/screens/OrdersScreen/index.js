import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CUSTOM_COLOR from '../../assets/constants/colors';
import {IMG_Orders} from '../../assets/images';
import scale from '../../assets/constants/responsive';
import FONT_FAMILY from '../../assets/constants/fonts';
import Icon_Back from '../../assets/images';

export class OrdersScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={Icon_Back} />
        </TouchableOpacity>
        <Text style={styles.headerContainer}>{'Orders'}</Text>
        <Image style={styles.imageContainer} source={IMG_Orders} />
        <Text style={styles.textContainer}>{'No orders yet'}</Text>
        <Text style={styles.smallTextContainer}>
          {'Hit the orange button down\nbelow to Create an order'}
        </Text>
      </SafeAreaView>
    );
  }
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: scale(6),
    height: scale(12),
    top: scale(6),
    left: scale(9),
    position: 'absolute',
  },
  imageContainer: {
    width: scale(143.13),
    height: scale(137.99),
    position: 'absolute',
    left: scale(132),
    top: scale(272.01),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontFamily: FONT_FAMILY.SFProTextRengula,
    top: scale(418),
    position: 'absolute',
    fontSize: 28,
    lineHeight: 33.41,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallTextContainer: {
    fontFamily: FONT_FAMILY.SFProTextRengula,
    fontSize: 17,
    position: 'absolute',
    top: scale(468),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.57,
    lineHeight: 20.29,
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
  },
  headerContainer: {
    fontFamily: FONT_FAMILY.SFProTextRengula,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 21.48,
    top: scale(61),
    left: scale(175),
  },
});
