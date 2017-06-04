import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	View,
} from 'react-native';

import Page1 from './views/page_1';
import Page3 from './views/page_3';

const bustl = React.createClass({
	getInitialState: function(){
		return {
			CurrentPage: 0
		};
	},

	ChangePage: function(PageToLoad){
		this.setState({
			CurrentPage: PageToLoad
		});
	},

	render: function() {
		var ComponentToLoad = null;

		switch(this.state.CurrentPage){
			case 0:
				ComponentToLoad = <Page1 onChangePage={this.ChangePage} />;
				break;
			case 2:
				ComponentToLoad = <Page3 onChangePage={this.ChangePage} />;
				break;
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
		//justifyContent: 'center',
	}
});

AppRegistry.registerComponent('bustl2', () => bustl);