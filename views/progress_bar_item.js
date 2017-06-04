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


const ProgressBarItem = React.createClass({
	
	contextTypes: {
		CurrentStep: React.PropTypes.number
	},

	render: function(){

		return(
			<View style={[styles.ProgressBarItem, styles.NotCurrentStep, this.context.CurrentStep == this.props.ThisStep && styles.CurrentStep]}>
				<Text style={[styles.NotCurrentStepText, this.context.CurrentStep == this.props.ThisStep && styles.CurrentStepText]}>Step {this.props.Step}</Text>
			</View>
		);
	}

});

const styles = StyleSheet.create({
	
	ProgressBarItem: {
		width:'30%',
		height:22,
	},

	CurrentStep: {
		backgroundColor:'#27AE60',
	},

	NotCurrentStep: {
		backgroundColor:'#DDDDDD',
	},

	CurrentStepText: {
		textAlign:'center',
		color:"#FFFFFF",
		padding:3,
		lineHeight:14
	},

	NotCurrentStepText: {
		textAlign:'center',
		color:"#AAAAAA",
		padding:3,
		lineHeight:14
	}


});

module.exports = ProgressBarItem;