import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';

const UpcomingStopRow = React.createClass({
	
	contextTypes: {
		ChangePage: React.PropTypes.func
	},

	render: function(){		

		var StopInfo = this.props.StopInfo

		if(this.props.StopIndex == 0){
			return(
				<View style={styles.UpcomingStopRow}>
					<Text style={{fontSize:36}}>•</Text>
					<Text style={styles.Headsign}>{StopInfo.StopName}</Text>
				</View>
			);
		} else {
			return(
				<TouchableOpacity style={styles.UpcomingStopRow} onPress={_.partial(this.context.ChangePage, 0)}>
					<View style={{flexDirection:'row', justifyContent:'flex-start'}}>
						<Text style={{fontSize:36}}>•</Text>
						<Text style={styles.Headsign}>{StopInfo.StopName}</Text>
					</View>
					<View style={{padding:3, paddingLeft:5}}>
						<Text style={styles.Extrainfo}>{StopInfo.MinutesAway}</Text>
						<Text style={styles.Headsign}>{this.props.StopIndex}</Text>
					</View>
				</TouchableOpacity>
			);
		}
	}

});

const styles = StyleSheet.create({

	UpcomingStopRow: {
		flexDirection:'row',
		justifyContent:'space-between',
		padding:5,
		paddingLeft:15,
		width:'100%',
		height:60,
	},

	RouteNumber: {
		fontSize:36,
		width:50,
		height:60,
		color:'black'
	},

	RouteName: {
		fontStyle:'italic',
		fontSize:12,
		padding:0,
	},

	Headsign: {
		fontSize: 20,
		color:'black'
	}

});

module.exports = UpcomingStopRow;