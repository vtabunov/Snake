import React, {Component} from 'react';
import {View, Image} from 'react-native';
import head from './checked.png';
import serega from './serega.png';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.face);
  }
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          width: this.props.size,
          height: this.props.size,
          backgroundColor: 'red',
          position: 'absolute',
          left: x * this.props.size,
          top: y * this.props.size,
          zIndex: 1,
        }}>
        <Image
          source={this.props.face ? serega : head}
          style={{
            width: 40,
            height: 40,
            left: -10,
            top: -11,
            borderRadius: 20,
            backgroundColor: 'transparent',
            position: 'absolute',
          }}
        />
      </View>
    );
  }
}
