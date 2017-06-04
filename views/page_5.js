import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList
} from 'react-native';

import _ from 'lodash';

import HorizontalRule from './horizontal_rule';
import OrangeButton from './orange_button';

const Page5 = React.createClass({

	contextTypes: {
		ChangePage: React.PropTypes.func
	},


	HandlePress: function(Stop){
		this.context.ChangePage(5, {Stop: Stop, TripId: this.props.TripId});
	},

	render: function(){

		return(
			<View style={{flexDirection: 'column'}}>
				<View style={styles.header}>
					<Text style={styles.header_text}>Let us know when you're on the bus</Text>
				</View>
				<View style={styles.subheader}>
					<Text style={styles.subheader_text}>Trip details</Text>
				</View>
				<View style={{flexDirection: 'row', padding: 3, marginBottom:3}}>
					<Text style={[styles.subheader_text, {
						fontSize: 14,
						fontWeight: 'bold',
						marginRight: 5,
						paddingTop: 2,
						justifyContent: 'space-between',
						color: '#A0A0A0'
					}]}>Route</Text>
					<Text style={[styles.subheader_text, {
						fontWeight: '500',
						position: 'absolute',
						left: 65
					}]}>{this.props.Route.route_short_name} {this.props.Route.trip_headsign}</Text>
				</View>
				<HorizontalRule />
				<View style={{flexDirection: 'row', padding: 3, marginBottom:3}}>
					<Text style={[styles.subheader_text, {
						fontSize: 14,
						fontWeight: 'bold',
						marginRight: 5,
						paddingTop: 2,
						justifyContent: 'space-between',
						color: '#A0A0A0'
					}]}>Start at</Text>
					<Text style={[styles.subheader_text, {
						fontWeight: '500',
						position: 'absolute',
						left: 65
					}]}>{this.props.CurrentProps.FirstStop.stop_name}</Text>
				</View>
				<HorizontalRule />
				<View style={{flexDirection: 'row', padding: 3, marginBottom:3}}>
					<Text style={[styles.subheader_text, {
						fontSize: 14,
						fontWeight: 'bold',
						marginRight: 5,
						paddingTop: 2,
						justifyContent: 'space-between',
						color: '#A0A0A0'
					}]}>End at</Text>
					<Text style={[styles.subheader_text, {
						fontWeight: '500',
						position: 'absolute',
						left: 65
					}]}>{this.props.CurrentProps.StopInfo.stop_name}</Text>
				</View>
				<HorizontalRule />
				<View style={{alignItems: 'center', marginTop: 20}}>
					<Text style={{
						fontSize: 14,
						fontWeight: 'normal',
						color: '#A0A0A0'
					}} >Have $2 ready ($3 if you need to transfer)</Text>
				</View>
				<View style={{padding: 20, justifyContent:'center', alignItems: 'center', flexDirection: 'column', marginTop: 275}}>
					<OrangeButton OnPress={this.HandlePress} Padding={15} FontSize={24} Height={60} Width={300}>I'm on the bus!</OrangeButton>
				</View>
			</View>
		);
	}
});

const styles = StyleSheet.create({

	header: {
		flexDirection: 'column',
		alignItems: 'center',
		height: 107,
		padding: 15,
		backgroundColor: '#27ae60'
	},

	header_text: {
		fontSize: 32,
		fontFamily: 'Roboto',
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold'
	},

	subheader: {
		height: 38,
		backgroundColor: '#DDDDDD',
		borderBottomColor: '#7f8c8d',
		borderBottomWidth: 1
	},

	subheader_text: {
		color: '#5F696A',
		fontSize: 18,
		marginLeft: 15,
		fontWeight: 'bold',
		marginTop: 7,
		fontFamily: "Roboto"
	}
});

module.exports = Page5;