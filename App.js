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
import { ThemeProvider, Button } from 'react-native-elements';

import EmailList from './src/plugins/EmailList/';
import AccountList from './src/plugins/AccountList/';
import EmailSend from './src/plugins/EmailSend/';

const StackNavigator = createStackNavigator({
  EmailList: EmailList,
  AccountList: AccountList,
  EmailSend: EmailSend
},{
  /*  defaultNavigationOptions: {
    headerStyle: {
      color: '#FFFFFF',
      backgroundColor: '#089de3'
    }
  }*/
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
