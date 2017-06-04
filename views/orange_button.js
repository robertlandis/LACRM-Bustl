import React from 'react';

import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

const OrangeButton = React.createClass({

	getDefaultProps: function(){
		return {
			OnPress: function(){},
			Height: 110,
			Width: 325,
			Padding: 27,
			FontSize: 48
		};
	},

	render: function(){
		var buttonStyle = {
			flexDirection: 'row',
			justifyContent: 'center',
			height: this.props.Height,
			width: this.props.Width,
			padding: this.props.Padding,
			backgroundColor: '#e67e22',
			alignItems: 'center',
			fontSize: this.props.FontSize,
			fontFamily: 'Roboto',
			color: 'white',
			textAlign: 'center',
			fontWeight: 'bold',
			textShadowColor: 'black'
		};

		return(
			<TouchableOpacity onPress={this.props.OnPress}>
				<Text style={[buttonStyle, this.props.Style]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
});

module.exports = OrangeButton;