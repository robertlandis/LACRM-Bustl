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
import GrayButton from './gray_button';
import OrangeButton from './orange_button';

var keys = [];
var watchId = null;
var TimeoutId = null;

/*function GetLocation_Raw(){
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log("GetLocation_Raw", position);
			try {
				AsyncStorage.setItem(position.timestamp.toString(), JSON.stringify(position));
				keys.push(position.timestamp.toString())
			} catch (error){
				console.log("There was an error", error);
			}
		},
		(error) => {
			alert(JSON.stringify(error));
		},
		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
	);
}

function GetLocation(){
	GetLocation_Raw();
	TimeoutId = setTimeout(GetLocation, 1000);
}
*/
const Page1 = React.createClass({
	/*StartTrackingLocation:function(){
		watchId = navigator.geolocation.watchPosition((position) => {
			console.log("StartTrackingLocation", position);
			try {
				AsyncStorage.setItem(position.timestamp.toString(), JSON.stringify(position));
				keys.push(position.timestamp.toString())
			} catch (error){
				console.log("There was an error", error);
			}
		});

		GetLocation();
		alert('Starting to collect data!');
	},

	StopTrackingLocation:function(){
		navigator.geolocation.clearWatch(watchId);
		clearTimeout(TimeoutId);

		var data = AsyncStorage.multiGet(keys, function(error, stores){
			console.log("saved data", stores);
			var http = new XMLHttpRequest();
			var url = "https://devwww.lessannoyingcrm.com/test/hackathon.php";
			var params = "testdata="+JSON.stringify(stores);
			http.open("POST", url, true);

			//Send the proper header information along with the request
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			http.onreadystatechange = function() {//Call a function when the state changes.
				if(http.readyState == 4 && http.status == 200) {
					alert('Data collected!');
				}
			}
			http.send(params);
			keys = [];
		});
	},*/

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
				<GrayButton ButtonText={'Plan route with Google Maps'} OnPress={()=> {alert("Press"); }}/>
			</View>

			<View style={[styles.container, {
				marginTop: 37
			}]}>
				<Text style={[styles.infoText, {
					marginBottom: 5
				}]}>Have your route and ready to get on the road?</Text>
				<OrangeButton OnPress={_.partial(this.props.onChangePage, 1)}>Start Ride</OrangeButton>
			</View>
		</View>
		);
	}
});

/*
<View>
	<Button title="Click me to start" onPress={_.bind(this.StartTrackingLocation, this)}/>
	<Button title="Click me to stop" onPress={_.bind(this.StopTrackingLocation, this)}/>
</View>
*/

const styles = StyleSheet.create({

	container: {
		justifyContent: 'center',
		//backgroundColor: '#F5FCFF',
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