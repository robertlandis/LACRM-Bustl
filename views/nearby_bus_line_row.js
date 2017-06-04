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

const NearbyBusLineRow = React.createClass({
	
	contextTypes: {
		ChangePage: React.PropTypes.func
	},

	render: function(){		

		var LineInfo = this.props.LineInfo

		return(
			<TouchableOpacity style={styles.NearbyBusLineRow} onPress={_.partial(this.context.ChangePage, 3)}>
				<Text style={styles.RouteNumber}>{LineInfo.RouteNumber}</Text>
				<View style={{padding:3, paddingLeft:5}}>
					<Text style={styles.RouteName}>{LineInfo.RouteName}</Text>
					<Text style={styles.Headsign}>{LineInfo.RouteHeadsign}</Text>
				</View>
			</TouchableOpacity>
		);
	}

});

const styles = StyleSheet.create({

	NearbyBusLineRow: {
		flexDirection:'row',
		justifyContent:'flex-start',
		padding:5,
		paddingLeft:15,
		borderBottomWidth:1,
		borderBottomColor:'#cccccc',
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

module.exports = NearbyBusLineRow;