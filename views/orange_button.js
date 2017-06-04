import React from 'react';

import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

const GrayButton = React.createClass({

	getDefaultProps: function(){
		return {
			OnPress: function(){},
			height: 110,
			width: 325,
			padding: 27,
			fontSize: 48
		};
	},

	buttonStyle: {
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
	},

	render: function(){
		return(
		<TouchableOpacity onPress={this.props.OnPress}>
			<Text style={this.buttonStyle}>{this.props.children}</Text>
		</TouchableOpacity>
		);
	}
});

module.exports = GrayButton;