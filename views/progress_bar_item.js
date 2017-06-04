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
			<View style={[styles.ProgressBarItem, this.context.CurrentStep == this.props.Step && styles.HighlighedProgressBarItem]}>
				<Text style={[styles.StepText, this.context.CurrentStep == this.props.Step && styles.CurrentStepText]}>Step {this.props.Step}</Text>
			</View>
		);
	}

});

const styles = StyleSheet.create({
	
	ProgressBarItem: {
		width:'30%',
		height:26,
		backgroundColor:"#dddddd",
	},

	HighlighedProgressBarItem: {
		backgroundColor:'#27ae60',
	},

	NotCurrentStep: {
		backgroundColor:'#DDDDDD',
	},

	StepText: {
		textAlign:'center',
		color:"#AAAAAA",
		padding:3,
		lineHeight:14
	},

	CurrentStepText: {
		color:"#ffffff"
	},

	


});

module.exports = ProgressBarItem;