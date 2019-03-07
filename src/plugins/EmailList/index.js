import React, { Component }from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class EmailListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <View>
        <Text>Screen Template</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  main_view: {
    flex: 1,
    alignItems: 'center'
  }
});
