import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import scale from '../../assets/constants/responsive';
import FONT_FAMILY from '../../assets/constants/fonts';

export class WaitingForUpgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundText}>
          <Text style={styles.Text}>{'We are updating this app'}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    flexDirection: 'row',
    flex: 1,
  },
  backgroundText: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: scale(50),
    width: '100%',
    height: scale(140),
  },
  Text: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 25,
  },
});
