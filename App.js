/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EmailList from './src/plugins/EmailList/';

const StackNavigator = createStackNavigator({
  EmailList: EmailList
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
