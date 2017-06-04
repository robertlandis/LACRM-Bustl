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


import StopsOnThisRoute from './stops_on_this_route'

const OnTheBusPage = React.createClass({	
	
	render: function(){

		var NumberOfStopsAway = 5;

		return(
			<View style={{flexDirection:'column', justifyContent:'flex-end'}}>
				<View style={styles.GreenBox}>
					<Text style={{color:'white', fontSize:36, textAlign:'center', fontWeight:'bold'}}>You're on your way!</Text>
				</View>
				<View style={{backgroundColor:'#e67e22', padding:10}}>
					<Text style={{color:'white', textAlign:'center'}}>You have</Text>
					<Text style={{color:'white', fontSize: 28, textAlign:'center', fontWeight:'bold'}}>{NumberOfStopsAway} more stop{NumberOfStopsAway != 1 ? "s" : null}</Text>
				</View>
				<StopsOnThisRoute />
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

module.exports = OnTheBusPage;