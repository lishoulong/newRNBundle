/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { Component } from 'react';
import _ from 'underscore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

class Animations extends Component {
  gotoTestapp = () => {
    console.log('gotoTestapp----------');
    const isContain = _.contains([1, 2, 3], 3);
    console.log('isContain', isContain);
  }
  render() {
    return (
      <View style={styles.container} onPress={this.gotoTestapp}>
        <Text style={styles.welcome}>
          Welcome to Animations Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit Animations.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Animations;