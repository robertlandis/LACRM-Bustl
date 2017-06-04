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
		height: 37,
		width: 275,
		padding: 8,
		backgroundColor: '#DBDFE0',
		alignItems: 'center',
		fontSize: 17,
		fontFamily: 'Roboto',
		textAlign: 'center',
		color: '#202020',
		fontWeight: '500'
	}
});

module.exports = GrayButton;