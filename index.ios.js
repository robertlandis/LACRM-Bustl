import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	View,
} from 'react-native';

import _ from 'lodash';

import Page1 from './views/page_1';
import ChooseRoutePage from './views/choose_route_page';
import ChooseEndingStopPage from './views/choose_ending_stop_page';
import Page3 from './views/page_3';

const bustl = React.createClass({
	childContextTypes: {
		ChangePage: React.PropTypes.func,
	},

	getChildContext: function(){
		return {
			ChangePage: this.ChangePage
		}
	},

	getInitialState: function(){
		return {
			CurrentPage: 2,
			CurrentPageProps: {}
		};
	},

	ChangePage: function(PageToLoad, PageProps = {}){	
		this.setState({
			CurrentPage: PageToLoad,
			CurrentPageProps: PageProps,
		});
	},

	render: function() {
		var ComponentToLoad = null;
		var key = null

		switch(this.state.CurrentPage){
			case 0:
				ComponentToLoad = <Page1 />;
				break;
			case 1:
				ComponentToLoad = <ChooseRoutePage />;
				break;
			case 2:
				ComponentToLoad = <Page3 />;
				break;
			case 3:
				ComponentToLoad = <ChooseEndingStopPage />
				break;
			default:
				break;
		}

		return (
			<View key={key} style={styles.container}>
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