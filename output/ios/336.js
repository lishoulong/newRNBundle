__d(/* newRNBundle/testApp.js */function(global, require, module, exports) {var _jsxFileName = '/Users/lifeifei/Documents/react-native/sourceCode/newRNBundle/testApp.js';

var _react = require(35     ); // 35 = react

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require(12            ); // 12 = react-native

var instructions = _reactNative.Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

var testApp = function (_Component) {
  babelHelpers.inherits(testApp, _Component);

  function testApp() {
    babelHelpers.classCallCheck(this, testApp);
    return babelHelpers.possibleConstructorReturn(this, (testApp.__proto__ || Object.getPrototypeOf(testApp)).apply(this, arguments));
  }

  babelHelpers.createClass(testApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          'Welcome to testApp Native!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          'To get started, edit testApp.js'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          instructions
        )
      );
    }
  }]);
  return testApp;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

module.exports = testApp;
}, 336, null, "newRNBundle/testApp.js");