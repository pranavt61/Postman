import React, { Component }from 'react';
import { Text, View } from 'react-native';

export default class EmailSendScreen extends Component {
  static navigationOptions = {
    title: 'Send Email',
  };
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


