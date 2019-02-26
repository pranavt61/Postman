/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import ScreenManager from './src/manager/';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <ScreenManager></ScreenManager>
      </View>
    );
  }
}
