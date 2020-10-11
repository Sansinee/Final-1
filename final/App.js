import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.instructions}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
export default class App extends Component {
  render() {
    let pic = {
          uri: 'https://www.wu.ac.th/images/theme2018/images/logo2561_100518.png'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{width: 300, height: 75}}/>
        <Greeting name='Walailak University' />
        <Greeting name='My First Program' />
        <Greeting name='@Mobile Programming' />
      </View>
    );
  }
}
