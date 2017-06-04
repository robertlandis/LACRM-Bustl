import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image,
	FlatList
} from 'react-native';
import _ from 'lodash';

import NearbyBusLineRow from './nearby_bus_line_row';

const NearbyBusLines = React.createClass({
	
	getInitialState: function(){
		return {
			"NearestLines":[
				{
					route_id:1,
					route_long_name:"Earth City",
					route_short_name:"34",
					trip_headsign:"To Hampton Loop"
				},
				{
					route_id:2,
					route_long_name:"Earth City",
					route_short_name:"34",
					trip_headsign:"To Chesterfield Valley"
				}	
			]
		}
	},


	render: function(){

		return(
			<FlatList
				data={this.props.NearbyRoutes}
				renderItem={({item}) => <NearbyBusLineRow LineInfo={item} />}
				keyExtractor={(item, index) => item.trip_id}
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

module.exports = NearbyBusLines;