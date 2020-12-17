import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  Text,
} from 'react-native';
import Constants from './Constants';
import {GameEngine} from 'react-native-game-engine';
import {name as appName} from './app.json';
import Head from './Head';
import Food from './Food';
import Tail from './Tail';

import {GameLoop} from './GameLoop';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
    this.state = {
      running: true,
    };
  }

  onEvent = (e) => {
    if (e.type === 'game-over') {
      Alert.alert('and how do you like this, Elon Musk?');
      this.setState({running: false});
    }
  };

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  reset = () => {
    this.engine.swap({
      head: {
        position: [0, 0],
        size: Constants.CELL_SIZE,
        renderer: <Head />,
        xspeed: 1,
        yspeed: 0,
        updateFrequency: 15,
        nextMove: 15,
      },
      food: {
        position: [
          this.randomBetween(0, Constants.GRID_SIZE - 1),
          this.randomBetween(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        renderer: <Food />,
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail />,
      },
    });
    this.setState({running: true});
  };

  render() {
    return (
      <View style={s.container}>
        <View style={s.display}>
          <GameEngine
            ref={(ref) => {
              this.engine = ref;
            }}
            style={{
              width: this.boardSize,
              height: this.boardSize,
              flex: null,
              backgroundColor: '#00CC9B',
              borderRadius: 1,
              borderColor: 'black',
            }}
            systems={[GameLoop]}
            entities={{
              head: {
                position: [0, 0],
                size: Constants.CELL_SIZE,
                renderer: <Head />,
                xspeed: 1,
                yspeed: 0,
                updateFrequency: 20,
                nextMove: 20,
              },
              food: {
                position: [
                  this.randomBetween(0, Constants.GRID_SIZE - 1),
                  this.randomBetween(0, Constants.GRID_SIZE - 1),
                ],
                size: Constants.CELL_SIZE,
                renderer: <Food />,
              },
              tail: {
                size: Constants.CELL_SIZE,
                elements: [],
                renderer: <Tail />,
              },
            }}
            onEvent={this.onEvent}
            running={this.state.running}
          />
        </View>

        {/* <View style={s.button}> */}
        <TouchableOpacity style={s.button} onPress={this.reset}>
          <Text style={s.text}>Try Again Motherfucker!</Text>
        </TouchableOpacity>
        {/* </View> */}

        <View style={s.gamepad}>
          <View style={s.controls}>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-up'});
                }}>
                <View style={s.control2}>
                  <Text style={{alignSelf: 'center', marginTop: 15}}>
                    Turbo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-left'});
                }}>
                <View style={s.control2}>
                  <Text style={{alignSelf: 'center', marginTop: 15}}>
                    Turbo
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={[s.control, {backgroundColor: null}]}></View>

              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-right'});
                }}>
                <View style={s.control}></View>
              </TouchableOpacity>
            </View>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-down'});
                }}>
                <View style={s.control}></View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={s.rightPanel}>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-up'});
                }}>
                <View style={s.control}></View>
              </TouchableOpacity>
            </View>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-left'});
                }}>
                <View style={s.control}></View>
              </TouchableOpacity>

              <View style={[s.control, {backgroundColor: null}]}></View>

              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-right'});
                }}>
                <View style={s.control2}>
                  <Text style={{alignSelf: 'center', marginTop: 15}}>
                    Turbo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.controlRow}>
              <TouchableOpacity
                onPress={() => {
                  this.engine.dispatch({type: 'move-down'});
                }}>
                <View style={s.control2}>
                  <Text style={{alignSelf: 'center', marginTop: 15}}>
                    Turbo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    backgroundColor: '#afeeee',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  display: {
    marginTop: 32,
    borderRadius: 5,
    backgroundColor: 'grey',
    height: 303,
    width: 303,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 300,
    backgroundColor: '#df73ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  controls: {
    width: 150,
    height: 150,
  },
  controlRow: {
    width: 150,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  control: {
    width: 60,
    height: 55,
    backgroundColor: '#df73ff',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 2,
    marginRight: 5,
  },
  control2: {
    width: 60,
    height: 55,
    backgroundColor: 'red',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 2,
    marginRight: 5,
  },
  gamepad: {
    flexDirection: 'row',
  },
  leftPanel: {},
  rightPanel: {
    paddingTop: 100,
    paddingLeft: 20,
  },
});
