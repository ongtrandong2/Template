import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import CUSTOM_COLOR from '../assets/constants/colors';

GoogleSignin.configure({
  webClientId:
    '850114143645-fp1cptd5g4ttm63spk9rrn97jh9g1deg.apps.googleusercontent.com',
});

const LoginGoogle = props => {
  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken, null);
    return auth().signInWithCredential(googleCredential);
  }
  function onSignOut() {
    return auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <View style={styles.container}>
      <Button
        title="Google Sign-in"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      {/* <Button title="Google Sign-Out" onPress={onSignOut} /> */}
    </View>
  );
};

export default LoginGoogle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
});
