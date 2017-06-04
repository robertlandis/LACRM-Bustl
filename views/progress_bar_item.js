import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';


const ProgressBarItem = React.createClass({
	
	contextTypes: {
		CurrentStep: React.PropTypes.number,
		ChangePage: React.PropTypes.func
	},

	render: function(){

		if(this.props.Step < this.context.CurrentStep){
			var OnPressFunction = _.partial(this.context.ChangePage, this.props.Step);
			return(
				<TouchableOpacity style={[styles.ProgressBarItem, this.context.CurrentStep == this.props.Step && styles.HighlighedProgressBarItem]} onPress={OnPressFunction}>
					<Text style={[styles.StepText, this.context.CurrentStep == this.props.Step && styles.CurrentStepText]}>Step {this.props.Step}</Text>
				</TouchableOpacity>
			);
		} else {
			return(
				<View style={[styles.ProgressBarItem, this.context.CurrentStep == this.props.Step && styles.HighlighedProgressBarItem]} onPress={OnPressFunction}>
					<Text style={[styles.StepText, this.context.CurrentStep == this.props.Step && styles.CurrentStepText]}>Step {this.props.Step}</Text>
				</View>
			);
		}

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