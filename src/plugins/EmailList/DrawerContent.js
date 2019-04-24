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

    this.state = {
      curSelected: 0,
      data: TEST_ADDR_DATA.slice()
    };
  }

  selectAccount = (index) => {
    const curSel = this.state.curSelected;
    let data = this.state.data;
  
    data[curSel].selected = false;

    data[index].selected = true;

    this.setState({
      curSelected: index
    });
  };

  render() {
    // navigate()
    const nav = this.props.nav;
    const onDrawerClose = this.props.onDrawerClose;
    const data = this.state.data;

    return (
      <View style={styles.main_view}>
        <FlatList
          data={data}
          renderItem={({item, index}) => 
            <Button 
              large 
              title={item.address}
              raised={item.selected}
              backgroundColor={'#FF0000'}
              onPress={() => this.selectAccount(index)}/>
            }
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
