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
import Loading from '../common/Loading/Loading';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

class testApp extends Component {
  constructor(props){
      super(props);
      this.state=({
          loadingstatus: true
      })
  }
  componentDidMount(){
    setTimeout(function(){
      this.setState({loadingstatus: false})
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to testApp Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit testApp.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        {
          this.state.loadingstatus ? 
          null :
          <Loading /> 
        }
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

module.exports = testApp;