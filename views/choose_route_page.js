import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image
} from 'react-native';
import _ from 'lodash';

import ProgressBar from './progress_bar';
import NearbyBusLines from './nearby_bus_lines';
import GetLocation from '../js/get_location';
import CallApi from '../js/api';

const ChooseRoutePage = React.createClass({
	
	getInitialState: function(){
		return {
			"NearbyRoutes":null
		}
	},

	componentWillMount: function(){

		var SetRoutesState = _.bind(this.setState, this)

		var Position = GetLocation(function(Position){
			CallApi("GetNearbyRoutes", {CurrentLat:Position.coords.latitude, CurrentLon:Position.coords.longitude}, function(Result){
				SetRoutesState({NearbyRoutes:Result});
			});
			
		})

	},

	render: function(){

		if(this.state.NearbyRoutes == null){
			return(
				<View></View>
			);
		} else {

			return(
				<View style={{justifyContent:'flex-end'}}>
					<ProgressBar style={{height:100}} CurrentStep={1} />
					<View style={styles.GreenBox}>
						<Text style={{color:'white', fontSize:24, fontWeight:'bold'}}>What route are you taking?</Text>
						<Text style={{color:'white', fontSize:14}}>If you're not sure, you should plan your route before starting this ride.</Text>
					</View>
					<NearbyBusLines NearbyRoutes={this.state.NearbyRoutes} />
				</View>
			);
		}
	}

});

const styles = StyleSheet.create({

	GreenBox: {
		backgroundColor:'#27ae60',
		paddingTop:10,
		paddingLeft:20,
		paddingRight:20,
		paddingBottom:10
	}

});

module.exports = ChooseRoutePage;