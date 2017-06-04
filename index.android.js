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
import ChooseRoutePage from './views/choose_route_page';

const bustl = React.createClass({
	getInitialState: function(){
		return {
			CurrentPage: 0
		};
	},

	childContextTypes: {
		ChangePage: React.PropTypes.func,
	},

	getChildContext: function(){
		return {
			ChangePage: this.ChangePage
		}
	},

	ChangePage: function(PageToLoad, Props = {}){
		this.setState({
			CurrentPage: PageToLoad,
			CurrentPageProps: Props,
		});
	},

	render: function() {
		var ComponentToLoad = null;

		switch(this.state.CurrentPage){
			case 0:
				ComponentToLoad = <Page1 onChangePage={this.ChangePage} />;
				break;
			case 1:
				ComponentToLoad = <ChooseRoutePage />;
				break;
			case 2:
				ComponentToLoad = <Page1 onChangePage={this.ChangePage} />
			default:
				break;
		}

		return (
			<View style={styles.container}>
				{ComponentToLoad}
			</View>
		);
	}
});

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('bustl2', () => bustl);