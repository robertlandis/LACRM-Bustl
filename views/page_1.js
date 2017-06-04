import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image,
	Linking,
	Platform
} from 'react-native';

import _ from 'lodash';
import GrayButton from './gray_button';
import OrangeButton from './orange_button';

const Page1 = React.createClass({
	
	contextTypes: {
		ChangePage: React.PropTypes.func
	},

	onMapsPress: function(){
		var Url = 'geo:';

		if(Platform.OS === 'ios'){
			Url = 'maps:';
		}

		Linking.openURL(Url);
	},

	render: function(){
		
		return(
		<View>
			<View style={styles.header}>
				<View style={styles.row}>
					<Image style={styles.logo} source={require("../i/bustl-180.png")} />
				</View>

				<View style={styles.row}>
					<Text style={styles.title}>bustl</Text>
				</View>

				<Text style={styles.header_text}>
					This is some text about how the app works. Sell the value prop and prime the user
				</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.infoText}>New to the St. Louis bus system?</Text>
				<GrayButton ButtonText={'View the Stl bus tutorial'} OnPress={()=> {alert("Press"); }}/>
			</View>

			<View style={[styles.container, {
				marginTop: 37
			}]}>
				<Text style={styles.infoText}>Need to look up your bus route?</Text>
				<GrayButton ButtonText={'Plan route with '+(Platform.OS === 'ios' ? 'Apple' : 'Google')+' Maps'} OnPress={this.onMapsPress} />
			</View>

			<View style={[styles.container, {
				marginTop: 37
			}]}>
				<Text style={[styles.infoText, {
					marginBottom: 5
				}]}>Have your route and ready to get on the road?</Text>
				<OrangeButton OnPress={_.partial(this.context.ChangePage, 1)}>Start Ride</OrangeButton>
			</View>
		</View>
		);
	}
});

const styles = StyleSheet.create({

	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 43
	},

	header: {
		flexDirection: 'column',
		alignItems: 'center',
		height: 286,
		padding: 20,
		backgroundColor: '#27ae60'
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	title: {
		color: '#ecf0f1',
		fontSize: 52,
		fontFamily: 'Roboto Slab',
		fontWeight: '600',
		shadowColor: 'black',
		shadowRadius: 50
	},

	logo: {
		alignItems: 'center',
		height: 100,
		width: 100
	},

	header_text: {
		fontSize: 23,
		fontFamily: 'Roboto',
		color: '#ecf0f1',
		textAlign: 'center',
	},

	infoText: {
		color: '#606060',
		marginBottom: 3
	}
});

module.exports = Page1;