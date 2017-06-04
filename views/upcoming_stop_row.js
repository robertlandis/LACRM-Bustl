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
				<View style={[styles.UpcomingStopRow, {justifyContent:'flex-start'}]}>
					<Text style={styles.BulletPoint}>•</Text>
					<View style={{flexDirection:'column', justifyContent:'space-around'}}>
						<Text style={{fontSize:16}}>Starting point:</Text>
						<Text style={[styles.Headsign, {top:-3}]}>{StopInfo.StopName}</Text>
					</View>
				</View>
			);
		} else {
			return(
				<TouchableOpacity style={styles.UpcomingStopRow} onPress={_.partial(this.context.ChangePage, 0)}>
					<View style={{flexDirection:'row', justifyContent:'flex-start'}}>
						<Text style={styles.BulletPoint}>•</Text>
						<View style={{flexDirection:'column', justifyContent:'space-around'}}>
							<Text style={styles.Headsign}>{StopInfo.StopName}</Text>
						</View>
					</View>
					<View style={{padding:3, paddingLeft:5, paddingRight:10}}>
						<Text style={styles.Extrainfo}>{StopInfo.MinutesAway} mins</Text>
						<Text style={styles.Extrainfo}>{this.props.StopIndex} stops</Text>
					</View>
				</TouchableOpacity>
			);
		}
	}

});

const styles = StyleSheet.create({

	BulletPoint: {
		fontSize:42,
		fontWeight:'bold',
		paddingRight:15,
		color:"#aaaaaa"
	},

	UpcomingStopRow: {
		flexDirection:'row',
		justifyContent:'space-between',
		padding:5,
		paddingLeft:15,
		width:'100%',
		height:60,
		paddingLeft:10
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
	},

	Extrainfo: {
		fontSize:14,
		color:"#aaaaaa"
	}

});

module.exports = UpcomingStopRow;