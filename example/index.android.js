/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InitDemo from './mineUI/Dialogs';
export default class AwesomeProject extends Component{
    render(){
      return (
	    <View style={styles.container}>
		   <InitDemo/>
		</View>   
      );
    }

 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
