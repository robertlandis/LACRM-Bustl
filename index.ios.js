/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
} from 'react-native';

import Page1 from './views/page_1';

export default class bustl2 extends Component {

	render() {
    return (
      <View style={styles.container}>
        <Page1 />
      </View>
    );
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('bustl2', () => bustl2);