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

import ProgressBar from './progress_bar';

var keys = [];
var watchId = null;
var TimeoutId = null;

function GetLocation_Raw(){
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

const Page1 = React.createClass({
	StartTrackingLocation:function(){
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
	},

	render: function(){
		return(
		<View>

			<ProgressBar CurrentStep={3} />
			<View style={styles.header}>
				<View style={styles.row}>
					<View><Image style={styles.logo} source={require("../i/bustl-180.png")} /></View>
				</View>

				<View style={styles.row}>
					<Text style={styles.title}>bustl</Text>
				</View>

				<Text style={styles.header_text}>
					This is some text about how the app works. Sell the value prop and prime the user
				</Text>
			</View>
			<View style={styles.container}>
				<View>
					<Button title="Click me to start" onPress={_.bind(this.StartTrackingLocation, this)}/>
					<Button title="Click me to stop" onPress={_.bind(this.StopTrackingLocation, this)}/>
				</View>
				
			</View>
			
		</View>
		);
	}
});

/*<Text>New to the St. Louis bus system?</Text>
				<Button title='View the Stl bus tutorial' onPress={()=> {console.log("Load the tutorial"); alert("Tutorial is not yet finished"); }} />*/

const styles = StyleSheet.create({

	container: {
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	},

	header: {
		flexDirection: 'column',
		alignItems: 'center',
		//justifyContent: 'center',
		height: 325,
		padding: 25,
		backgroundColor: '#27ae60'
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	title: {
		color: '#ecf0f1',
		fontSize: 60,
		fontFamily: 'Roboto',
		fontWeight: '700',
		marginBottom: 5
	},

	logo: {
		alignItems: 'center',
		height: 120,
		width: 120
	},

	header_text: {
		fontSize: 24,
		fontFamily: 'Roboto',
		color: '#ecf0f1',
		textAlign: 'center',
		marginBottom: 10,
		textShadowColor: 'black',
		fontWeight: '400'
	}
});

module.exports = Page1;