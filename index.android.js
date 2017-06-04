import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	View,
} from 'react-native';

import Page1 from './views/page_1';
import ChooseRoutePage from './views/choose_route_page';
import ChooseEndingStopPage from './views/choose_ending_stop_page'
import Page3 from './views/page_3';
import OnTheBusPage from './views/on_the_bus_page';


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

		switch(this.state.CurrentPage){
			case 0:
				ComponentToLoad = <Page1 />;
				break;
			case 1:
				ComponentToLoad = <ChooseRoutePage />;
				break;
			case 2:
				ComponentToLoad = <Page3 TripId={this.state.CurrentPageProps.TripId} />;
				break;
			case 3:
				ComponentToLoad = <ChooseEndingStopPage TripId={this.state.CurrentPageProps.TripId} Stop={this.state.CurrentPageProps.Stop} />;
				break;
			case 4:
				ComponentToLoad = <OnTheBusPage />;
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
		justifyContent: 'center',
	}
});

AppRegistry.registerComponent('bustl2', () => bustl);