import React from 'react';

import {
	StyleSheet,
	Text,
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
		height: 110,
		width: 325,
		padding: 27,
		backgroundColor: '#e67e22',
		alignItems: 'center',
		fontSize: 48,
		fontFamily: 'Roboto',
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		textShadowColor: 'black'
	}
});

module.exports = GrayButton;