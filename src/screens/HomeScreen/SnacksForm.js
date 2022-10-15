import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';

export class Snacks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.scrollView}>
          <Text style={styles.Text}>{'We are updating this app'}</Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: scale(430),
    backgroundColor: CUSTOM_COLOR.Concrete,
    justifyContent: 'center',
    height: scale(370),
    width: '100%',
  },
  Text: {
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
    fontSize: 25,
  },
});
