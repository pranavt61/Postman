import React, { Component }from 'react';
import {
  Text, View, StyleSheet, Alert
} from 'react-native';
import {
  Input, Button
} from 'react-native-elements'

export default class EmailSendScreen extends Component {
  static navigationOptions = {
    title: 'Send Email',
  };
  constructor(props) {
    super(props);

    this.state = {
      toText: '',
      titleText: '',
      bodyText: ''
    };
  }

  onToChange = (text) => {
    this.setState({
      toText: text
    });
  }
  
  onTitleChange = (text) => {
    this.setState({
      titleText: text
    });
  }

  onBodyChange = (text) => {
    this.setState({
      bodyText: text
    });
  }

  onSendPress = () => {
    const { goBack } = this.props.navigation;
    const toText = this.state.toText;
    const titleText = this.state.titleText;
    const bodyText = this.state.bodyText;

    if (toText.length && titleText.length && bodyText.length) {
      Alert.alert(
        'Send Email?',
        '',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => goBack()
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Error',
        'Fields are missing',
        [
          {
            text: 'OK'
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    const onToChange = this.onToChange;
    const onTitleChange = this.onTitleChange;
    const onBodyChange = this.onBodyChange;
    const onSendPress = this.onSendPress;

    return (
      <View style={styles.main_view}>
        <View style={styles.to_text}>
          <Input
            placeholder='To'
            onChangeText={(text) => onToChange(text)}/>
        </View>
        <View style={styles.title_text}>
          <Input
            placeholder='Title'
            onChangeText={(text) => onTitleChange(text)}/>
        </View>
        <View style={styles.body_text}>
          <Input
            placeholder='Body'
            multiline={true}
            numberOfLines = {20}
            inputStyle={styles.body_text_input}
            onChangeText={(text) => onBodyChange(text)}/>
        </View>
        <Button
          onPress={() => onSendPress()}
          large
          icon={{color: 'white', name: 'send'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    flexDirection: 'column'
  },

  to_text:{},
  title_text: {},
  body_text: {},

  body_text_input: {
  }
});
