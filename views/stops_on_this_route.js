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

	_keyExtractor: function(item, index){
		return index;
	},

	render: function(){

		return(
			<FlatList 
				data={this.props.UpcomingStops}
				keyExtractor={this._keyExtractor}
				renderItem={({item, index}) => <UpcomingStopRow FirstStop={this.props.StartingStop} StopIndex={index} StopInfo={item}/>}
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