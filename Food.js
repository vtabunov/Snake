import React, {Component} from 'react';
import {View, Image} from 'react-native';
import ass from './ass.png';

export default class Food extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          width: this.props.size,
          height: this.props.size,
          backgroundColor: 'green',
          position: 'absolute',
          left: x * this.props.size,
          top: y * this.props.size,
        }}>
        <Image
          source={ass}
          style={{
            width: 30,
            height: 30,
            left: -5,
            top: -5,
            borderRadius: 20,
            backgroundColor: 'transparent',
          }}
        />
      </View>
    );
  }
}
