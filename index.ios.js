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
import OnTheBusPage from './views/on_the_bus_page';

import GetLocation from './js/get_location';

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
			CurrentPage: 0,
			CurrentPageProps: {},
			position: null
		};
	},

	componentWillMount: function(){
		GetLocation((position)=>{
			this.setState({
				position: position
			});
		});
	},

	ChangePage: function(PageToLoad, PageProps = {}){	
		this.setState({
			CurrentPage: PageToLoad,
			CurrentPageProps: PageProps,
		});
	},

	render: function() {
		var ComponentToLoad = null;
		var key = null;

		switch(this.state.CurrentPage){
			case 0:
				ComponentToLoad = <Page1 Location={this.state.position} />;
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