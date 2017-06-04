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

import NearbyBusLineRow from './nearby_bus_line_row';

const NearbyBusLines = React.createClass({
	
	getInitialState: function(){
		return {
			"NearestLines":[
				{
					RouteName:"Earth City",
					RouteNumber:"34",
					RouteHeadsign:"To Hampton Loop"
				},
				{
					RouteName:"Earth City",
					RouteNumber:"34",
					RouteHeadsign:"To Chesterfield Valley"
				}
			]
		}
	},


	render: function(){

		var NearestLineRows = [];
		var i = 0;

		_.each(this.state.NearestLines, function(ThisLine){
			NearestLineRows.push(
				<NearbyBusLineRow key={i} LineInfo={ThisLine} />
			)
			i++;
		});

		return(
			<View>
				{NearestLineRows}
			</View>
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

module.exports = NearbyBusLines;