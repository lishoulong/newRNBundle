import React, { Component } from 'react';
import { Text } from 'react-native';
// import App from './App';
// import testApp from './testApp';

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
