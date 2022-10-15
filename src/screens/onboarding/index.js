import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {IMG_Background, IMG_Logo} from '../../assets/images';
export class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollView}>
          <View>
            <>{/* Logo */}</>
            <View style={styles.logoContainer}>
              <Image source={IMG_Logo} style={styles.logo} />
            </View>
            <>{/* Title */}</>
            <Text style={styles.Text}>{'Food for \nEveryone'}</Text>
            <>{/* background */}</>
            <View style={styles.backgroundContainer}>
              <Image source={IMG_Background} style={styles.background} />
            </View>
            <>{/* Button */}</>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{'Get started'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  logoContainer: {
    backgroundColor: 'white',
    width: scale(73),
    height: scale(73),
    borderRadius: scale(73) / 2,
    marginLeft: scale(49),
    marginTop: scale(56),
  },

  logo: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  Text: {
    color: 'white',
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(70),
    marginLeft: scale(51),
    position: 'absolute',
    marginTop: scale(155),
  },

  backgroundContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: scale(364),
    position: 'absolute',
  },

  background: {
    resizeMode: 'cover',
  },
  scrollView: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  buttonContainer: {
    width: scale(314),
    height: scale(70),
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'absolute',
    marginTop: scale(790),
    marginLeft: scale(51),
    justifyContent: 'center',
    alignSelf: 'center',
  },

  buttonText: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(18),
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
