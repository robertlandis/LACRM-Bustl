import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image,
	ScrollView,
	FlatList
} from 'react-native';
import _ from 'lodash';

import UpcomingStopRow from './upcoming_stop_row';

const StopsOnThisRoute = React.createClass({
	
	getInitialState: function(){
		return {
			"UpcomingStops":[
				{
					StopId:1,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"1",
				},
				{
					StopId:2,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"2",
				},
				{
					StopId:3,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"3",
				},
				{
					StopId:4,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"5",
				},
				{
					StopId:5,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"7",
				},
				{
					StopId:6,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"10",
				},
				{
					StopId:7,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"12",
				},
				{
					StopId:8,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"16",
				},
				{
					StopId:9,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"18",
				},
				{
					StopId:10,
					StopName:"18th Street @ Pine NB",
					MinutesAway:"20",
				}
			]
		}
	},

	_keyExtractor: function(item, index){
		return index;
	},

	render: function(){

		

		return(
			<FlatList 
				data={this.state.UpcomingStops}
				keyExtractor={this._keyExtractor}
				renderItem={({item, index}) => <UpcomingStopRow StopIndex={index} StopInfo={item}/>}
			/>
		);
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

module.exports = StopsOnThisRoute;