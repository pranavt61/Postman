import React, { Component }from 'react';
import {
  View, StyleSheet, FlatList, Image, TouchableOpacity, Alert
} from 'react-native';
import {
  Button, Icon
} from 'react-native-elements';
import Drawer from 'react-native-drawer'

import ListItem from "./ListItem";
import DrawerContent from './DrawerContent';

import TEST_EMAIL_DATA from '../../test_data/email_data';

export default class EmailListScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      headerStyle: {
        color: '#FFFFFF',
        backgroundColor: '#089de3'
      },
      headerTitle: 'Inbox',
      headerLeft: (
        <TouchableOpacity
          style={{paddingLeft: 10}}
          onPress={() => {params.onDrawerPress()}}>
          <Icon 
            name="bars"
            type='font-awesome'
            color="black"/>
        </TouchableOpacity>
      ),
    };
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // set header button action
    this.props.navigation.setParams({
      onDrawerPress: this.onDrawerPress
    });
  }

  onDrawerPress = () => {
    this._drawer.open();
  };

  onDrawerClose = () => {
    this._drawer.close();
  }

  render() {
    const { navigate } = this.props.navigation;
    const onDrawerClose = this.onDrawerClose;

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        openDrawerOffset={100}
        content={<DrawerContent nav={navigate} onDrawerClose={onDrawerClose}/>}>
        <View>
          <FlatList
            data={TEST_EMAIL_DATA}
            renderItem={({item}) => <ListItem mailData={item}/>}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {navigate('EmailSend')}}
            style={styles.TouchableOpacityStyle}>
            <Image
               source={{
                uri:'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Edit-512.png',
              }}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
