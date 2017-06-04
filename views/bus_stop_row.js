import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import HorizontalRule from './horizontal_rule';

const BusStopRow = React.createClass({

	HandlePress: function(){
		this.props.OnPress(this.props.data.stop_id);
	},

	render: function(){
		return(
			<TouchableOpacity onPress={this.HandlePress}>
				<View onPress={this.props.onPress} style={styles.container}>
					<Text style={styles.row}>{this.props.data.stop_name}</Text>
					<Text style={styles.distance_info}>{this.props.data.Distance.toString().substr(0, 3)} miles</Text>
				</View>
				<HorizontalRule />
			</TouchableOpacity>
		);
	}
});

const styles = StyleSheet.create({

	container: {
		height: 63,
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	row: {
		fontSize: 20,
		fontFamily: 'Roboto',
	},

	distance_info: {
		fontSize: 13,
		color: 'grey',
		position: 'absolute',
		right: 15
	}
});

module.exports = BusStopRow;