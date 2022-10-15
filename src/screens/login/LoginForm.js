import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {CustomInput} from '../../assets/components/CustomInput';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginGoogle from '../../auth/SignInGoogle';
GoogleSignin.configure({
  webClientId:
    '850114143645-fp1cptd5g4ttm63spk9rrn97jh9g1deg.apps.googleusercontent.com',
});
async function onGoogleButtonPress(callback) {
  const {idToken} = await GoogleSignin.signIn();
  const signInResult = await GoogleSignin.signIn();
  console.log(signInResult);
  const googleCredential = auth.GoogleAuthProvider.credential(idToken, null);
  auth().signInWithCredential(googleCredential);
  typeof callback === 'function' && callback();
}
export class Login extends Component {
  constructor(props) {
    super(props);
  }
  Login = async () => {
    await onGoogleButtonPress();
    await AsyncStorage.setItem('SIGN_OUT', '0');
    const isSignOut = await AsyncStorage.getItem('SIGN_OUT');
    this.props.navigation.navigate('OptionsDrawer');
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.backgroundContainer}>
          <>{/*Info and forgot password*/}</>
          <ScrollView>
            <View style={styles.In4Container}>
              <CustomInput label={'E-mail address:'} />
              <CustomInput label={'Password: '} secureTextEntry={true} />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }>
                <Text style={styles.forgotPassword}>Forgot password</Text>
              </TouchableOpacity>
            </View>
            <>{/*Button Selection*/}</>
            <TouchableOpacity
              onPress={() => {
                this.Login();
              }}>
              <Text style={styles.googleText}>Sign-in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OptionsDrawer')}
              style={styles.buttonSelection}>
              <Text style={styles.SelectionText}>{'Login'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  In4Container: {
    marginTop: scale(20),
    marginLeft: scale(50),
    height: scale(300),
    marginEnd: scale(50),
    justifyContent: 'space-around',
  },
  forgotPassword: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignContent: 'flex-start',
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
    marginTop: scale(41),
    alignSelf: 'center',
  },
});
