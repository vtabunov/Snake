import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Constants from './Constants';
import ass from './ass.png';

export default class Tail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tailList = this.props.elements.map((el, idx) => {
      return (
        <View
          key={idx}
          style={{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: 'white',
            borderWidth: 1,
            position: 'absolute',
            borderRadius: 5,
            left: el[0] * this.props.size,
            top: el[1] * this.props.size,
            zIndex: 0,
          }}>
          <Image
            source={ass}
            style={{
              width: 15,
              height: 20,
              top: -1,
              left: 2,
              borderRadius: 10,
            }}
          />
        </View>
      );
    });

    return (
      <View
        style={{
          width: Constants.GRID_SIZE * this.props.size,
          height: Constants.GRID_SIZE * this.props.size,
        }}>
        {tailList}
      </View>
    );
  }
}
