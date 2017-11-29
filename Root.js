import { Text } from 'react-native';
import React, { Component } from 'react';
// base modules
require('underscore');
require('./js/src/resolveInject');
require('./js/src/modules/index.js');

export default class Root extends Component {
    render(){
      let _content = null;
      const require_method = require
      const moduleName = this.props.jsFileName || false;
      
      if(moduleName){
        console.log('moduleName',moduleName);
        const moduleContent = require_method(moduleName);
        console.log('moduleContent',moduleContent);
        _content = React.createElement(moduleContent,this.props);
        console.log('if(moduleName)', moduleName);
       return _content;
      }else{
        return (<Text>I am the MainPage</Text>)
      }
    }
}
