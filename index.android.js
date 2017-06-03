/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Button,
	AsyncStorage
} from 'react-native';
import _ from 'lodash';

var keys = [];

export default class bustl2 extends Component {

	state = {
		initialPosition: 'unknown',
		lastPosition: 'unknown',
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}
	}



	componentWillMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {

				var stateObject = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: this.state.region.latitudeDelta,
					longitudeDelta: this.state.region.longitudeDelta
				};
				this.setState({region: stateObject});
			},
			(error) => {
				alert(JSON.stringify(error));
			},
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	}

	StartTrackingLocation(){
		this.watchID = navigator.geolocation.watchPosition((position) => {
			this.setState({lastPosition: position});
			console.log("positoin", position);
			try {
				AsyncStorage.setItem('@LastLocation'+position.timestamp, JSON.stringify(position));
				keys.push('@LastLocation'+position.timestamp)
			} catch (error){
				console.log("There was an error", error);
			}
		});
	}

	StopTrackingLocation(){
		navigator.geolocation.clearWatch(this.watchId);
		var data = AsyncStorage.multiGet(keys, function(data2, stores){
			console.log("what did we get", stores);
			var http = new XMLHttpRequest();
			var url = "https://devwww.lessannoyingcrm.com/test/hackathon.php";
			var params = "testdata="+JSON.stringify(stores);
			http.open("POST", url, true);

			//Send the proper header information along with the request
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			http.onreadystatechange = function() {//Call a function when the state changes.
				if(http.readyState == 4 && http.status == 200) {
					alert(http.responseText);
				}
			}
			http.send(params);
			// fetch('https://devwww.lessannoyingcrm.com/test/hackathon.php', {
			// 	method: 'POST',
			// 	body: JSON.stringify(stores)
			// }, function(){});
		});
	}

	render() {
		return (
            <View style={styles.container}>
              <Button title="Click me to start" onPress={_.bind(this.StartTrackingLocation, this)}/>
              <Button title="Click me to stop" onPress={_.bind(this.StopTrackingLocation, this)}/>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	}
});

AppRegistry.registerComponent('bustl2', () => bustl2);