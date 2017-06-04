import React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	AsyncStorage,
	Image
} from 'react-native';
import _ from 'lodash';

const NearbyBusLineRow = React.createClass({
	
	
	render: function(){		

		var LineInfo = this.props.LineInfo

		return(
			<View style={styles.NearbyBusLineRow}>
				<Text style={styles.RouteNumber}>{LineInfo.RouteNumber}</Text>
				<View>
					<Text>{LineInfo.HeadSign}</Text>
				</View>
			</View>
		);
	}

});

const styles = StyleSheet.create({

	NearbyBusLineRow: {
		padding:10,
		flexDirection:'row',
		flex:1,
		justifyContent:'flex-start',
		borderBottomWidth:1,
		borderBottomColor:'#cccccc',
	},

	RouteNumber: {
		fontWeight:'bold',
		fontSize:20,
		width:50,
		height:60
	}

});

module.exports = NearbyBusLineRow;