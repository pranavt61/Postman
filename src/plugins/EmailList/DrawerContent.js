import React, { Component }from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  Button
} from 'react-native-elements';

import TEST_ADDR_DATA from '../../test_data/email_addresses';

export default class DrawerContent extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // navigate()
    const nav = this.props.nav;
    const onDrawerClose = this.props.onDrawerClose;

    return (
      <View style={styles.main_view}>
        <FlatList
          data={TEST_ADDR_DATA}
          renderItem={({item}) => 
            <Button 
              large 
              title={item.address}/>
            }
        />
        <Button
          onPress={() => onDrawerClose()}
          large
          title='Close'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    flexDirection: 'column'
  }
});
