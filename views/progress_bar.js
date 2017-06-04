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

import ProgressBarItem from './progress_bar_item';

const ProgressBar = React.createClass({
	
	childContextTypes: {
		CurrentStep: React.PropTypes.number
	},

	getChildContext: function() {
		return {
			CurrentStep: this.props.CurrentStep
		}
	},
	
	render: function(){

		return(
			<View style={styles.ProgressBar}>
				<ProgressBarItem Step={1} />
				<ProgressBarItem Step={2} />
				<ProgressBarItem Step={3} />
			</View>
		);
	}

});

const styles = StyleSheet.create({

	ProgressBar: {
		padding:20,
		flexDirection:'row',
		justifyContent:'space-between',
	}

});

module.exports = ProgressBar;