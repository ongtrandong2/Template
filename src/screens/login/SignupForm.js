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

export class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.backgroundContainer}>
          <ScrollView>
            <View style={styles.differentBackground}>
              <>{/*Info and forgot password*/}</>
              <View style={styles.In4Container}>
                <CustomInput label={'E-mail address:'} />
                <CustomInput label={'Password: '} secureTextEntry={true} />
                <CustomInput
                  label={'Confirm Password: '}
                  secureTextEntry={true}
                />
              </View>
              <>{/*Button Selection*/}</>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('HomeScreen')}
                style={styles.buttonSelection}>
                <Text style={styles.SelectionText}>{'Sign Up'}</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'space-between',
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
    marginTop: scale(50),
    alignSelf: 'center',
  },
});
