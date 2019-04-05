import React, { Component }from 'react';
import {
  View, StyleSheet, FlatList
} from 'react-native';
import { Button } from 'react-native-elements';

import ListItem from "./ListItem";

import TEST_EMAIL_DATA from '../../test_data/email_data';

export default class EmailListScreen extends Component {
  static navigationOptions = {
    title: 'Inbox',
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <FlatList
          data={TEST_EMAIL_DATA}
          renderItem={({item}) => <ListItem mailData={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1
  }
});
