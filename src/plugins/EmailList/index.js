import React, { Component }from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

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
        <Button
          title="Account List"
          onPress={() => navigate('AccountList')}
        />
        <Button
          title="Email Send"
          onPress={() => navigate('EmailSend')}
        />
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
