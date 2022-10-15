import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {IMG_Bella, IMG_Vector1} from '../../assets/images';
import {Login} from './LoginForm';
import {Signup} from './SignupForm';
import {CustomSwitch} from '../../assets/components/CustomSwitch';
import {UnderlineButton} from '../../assets/components/UnderlineButton';
class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.label === 'Login' ? (
      <Login {...this.props.props} />
    ) : (
      <Signup {...this.props.props} />
    );
  }
}

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Login',
    };
  }
  render() {
    return (
      <SafeAreaView
        style={styles.backgroundContainer}
        onPressHandle={() => {
          this.getData();
        }}>
        <View style={styles.backgroundAbove}>
          <>{/*Logo*/}</>
          <View style={styles.backgroundLogo}>
            <Image source={IMG_Bella} style={styles.logo} />
            <Image source={IMG_Vector1} style={styles.logoVector} />
          </View>
          <>{/*Change between Login and Sign Up*/}</>
          <CustomSwitch
            flexGrow={1}
            justifyContent={'center'}
            flexDirection={'row'}>
            <View style={styles.backgroundText}>
              <View style={styles.backgroundButton}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Login'})}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === 'Login'
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.White,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Login</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundButton}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Sign-up'})}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label !== 'Login'
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.White,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Sign-Up</Text>
                </UnderlineButton>
              </View>
            </View>
          </CustomSwitch>
        </View>
        <Condition label={this.state.label} props={this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    flex: 1,
  },
  logo: {
    marginTop: scale(128),
    width: scale(131.53),
    height: scale(162.38),
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  logoVector: {
    top: scale(-50),
    width: scale(59.88),
    height: scale(115.83),
    marginLeft: scale(25),
    position: 'absolute',
  },
  backgroundAbove: {
    backgroundColor: CUSTOM_COLOR.White,
    width: '100%',
    height: scale(400),
    elevation: 10,
    borderRadius: 30,
    top: scale(-30),
    justifyContent: 'center',
  },
  backgroundLogo: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  backgroundButton: {
    flex: 1,
    marginLeft: 10,
  },
  backgroundText: {
    alignContent: 'center',
    overflow: 'hidden',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
  },
  underLine: {
    width: scale(134),
    height: scale(4),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  button: {
    height: '70%',
  },
});
