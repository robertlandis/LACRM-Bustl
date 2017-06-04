function GetLocation(Success = () => {}){
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log("GetLocation", position);
			Success(position);
		},
		(error) => {
			alert(JSON.stringify(error));
		},
		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
	);
}

module.exports = GetLocation;