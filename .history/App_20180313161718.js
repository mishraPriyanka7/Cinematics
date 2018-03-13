/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
                 constructor(props) {
                   super(props);

                   this.state = { scrollY: new Animated.Value(0) };
                 }

                 _renderScrollViewContent() {
                   const data = Array.from({ length: 30 });
                   return <View style={styles.scrollViewContent}>
                       {data.map((_, i) => (
                         <View key={i} style={styles.row}>
                           <Text>{i}</Text>
                         </View>
                       ))}
                     </View>;
                 }

                 render() {
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    

                 render() {
                   return <View style={styles.container}>
                       <Text style={styles.welcome}>
                         Welcome to React Native!
                       </Text>
                       <Text style={styles.instructions}>
                         To get started, edit App.js
                       </Text>
                       <Text style={styles.instructions}>
                         {instructions}
                       </Text>
                     </View>;
                 }
               }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
