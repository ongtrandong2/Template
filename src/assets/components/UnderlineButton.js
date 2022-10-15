import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

export class UnderlineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{height: '100%'}}>
        <TouchableOpacity
          onPress={() => this.props.onPress()}
          style={this.props.style}>
          {this.props.children}
        </TouchableOpacity>
        <View
          style={[this.props.underlineStyle, {bottom: 0, position: 'absolute'}]}
        />
      </View>
    );
  }
}
