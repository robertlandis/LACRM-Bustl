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
import StopsOnThisRoute from './stops_on_this_route'

const ChooseEndingStopPage = React.createClass({	
	
	render: function(){

		return(
			<View style={{flexDirection:'column', justifyContent:'flex-end'}}>
				<ProgressBar style={{height:100}} CurrentStep={3} />
				<View style={styles.GreenBox}>
					<Text style={{color:'white', fontSize:24, fontWeight:'bold'}}>Where are you getting off?</Text>
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

module.exports = ChooseEndingStopPage;