import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList
} from 'react-native';

import _ from 'lodash';

import ProgressBar from './progress_bar';
import BusStopRow from './bus_stop_row';
import HorizontalRule from './horizontal_rule';
import GetLocation from '../js/get_location';
import CallApi from '../js/api';

const Page3 = React.createClass({

	contextTypes: {
		ChangePage: React.PropTypes.func
	},

	getInitialState: function(){
		return {
			stops: null
		};
	},

	componentWillMount: function(){
		var SetPage3State = _.bind(this.setState, this);

		GetLocation(function(position){
			CallApi("GetNearbyStops", {
				CurrentLat: position.coords.latitude.toString(),
				CurrentLon: position.coords.longitude.toString()
			}, function(Result){
				SetPage3State({stops: Result});
			});
		});	
	},

	HandlePress: function(StopId){
		this.context.ChangePage(3, {StopId: StopId});
	},

	render: function(){

		if(this.state.stops == null){
			return (<View></View>);
		}

		return(
			<View>
				<ProgressBar CurrentStep={2}/>
				<View style={styles.header}>
					<Text style={styles.header_text}>Where are you getting on?</Text>
				</View>
				<View style={styles.subheader}>
					<Text style={styles.subheader_text}>Nearby stops</Text>
				</View>
				<FlatList
					data={this.state.stops}
					renderItem={({item}) => <BusStopRow OnPress={this.HandlePress} data={item} /> }
					style={{height:415}}
					keyExtractor={(item, index) => item.stop_id}
				/>
				<HorizontalRule />
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
		height: 60,
		padding: 15,
		marginTop: 2,
		backgroundColor: '#27ae60'
	},

	header_text: {
		fontSize: 28,
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

module.exports = Page3;