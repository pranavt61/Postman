import React, { Component }from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class AccountListScreen extends Component {
  static navigationOptions = {
    title: 'Account List'
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main_view}>
        <Text>Account List</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  }
});
