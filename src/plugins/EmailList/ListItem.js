import React, { Component }from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import TimeAgo from 'react-native-timeago';

export default class Listing extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const mailData = this.props.mailData;

    if (typeof mailData !== 'object') {
      return (
        <View style={styles.main_view}>
          <Text>No Email Data</Text>
        </View>
      );
    }

    const senderName = mailData.sender_name || mailData.sender_email;
    const senderIcon = mailData.sender_icon;
    const timestamp = mailData.timestamp;
    const title = mailData.title;
    const body = mailData.body;

    return (
      <View style={styles.main_view}>
        <View style={styles.title_bar}>
          <View style={styles.icon}>
            <Avatar
              size='large'
              rounded
              source={{uri: senderIcon}} />
          </View>
          <View style={styles.title_center}>
            <Text style={styles.sender_name_text}>{senderName}</Text>
            <Text style={styles.title_text}>{title}</Text>
          </View>
          <View style={styles.time}>
            <TimeAgo time={new Date(timestamp * 1000)} />
          </View>
        </View>
        <View style={styles.preview}>
          <Text>{body}</Text>
        </View>
        <View style={styles.option_bar}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10
  },
  title_bar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#089de3'
  },
  icon: {
    padding: 5,
    flex: 1
  },
  title_center: {
    flex: 2
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  sender_name_text: {
    fontSize: 20,
    color: 'white'
  },
  title_text: {
    fontSize: 15,
    color: 'white'
  },

  preview: {
    flex: 2,
    backgroundColor: '#FFFFFF'
  },

  option_bar: {
    flex: 1,
    backgroundColor: '#089de3'
  }
});
