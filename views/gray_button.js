import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

const GrayButton = React.createClass({

	getDefaultProps: function(){
		return {
			ButtonText: "OK",
			OnPress: function(){}
		};
	},

	render: function(){
		return(
		<TouchableOpacity onPress={this.props.OnPress}>
			<Text style={styles.button}>{this.props.ButtonText}</Text>
		</TouchableOpacity>
		);
	}
});

const styles = StyleSheet.create({

	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 40,
		width: 275,
		padding: 10,
		backgroundColor: '#DEE1E3',
		alignItems: 'center',
		fontSize: 17,
		fontFamily: 'Roboto',
		textAlign: 'center',
		color: '#202020',
		fontWeight: '500'
	}
});

module.exports = GrayButton;