import React from 'react';
import ReactNative, { AppRegistry } from 'react-native';
// import Root from './Root';
import App from './App';

const app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.registerComponent('newRNBundle', () => App);
AppRegistry.runApplication('newRNBundle', {
  rootTag: app
})

// module.exports = Root;