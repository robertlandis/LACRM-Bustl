function CallApi(FunctionName, Parameters, ReturnFunction){
	if(Parameters == null){
		Parameters = {};	
	}
	
	var http = new XMLHttpRequest();
	var url = "http://www.lacathon.com/backend/api/app.php";
	var params = 'Function='+FunctionName+'&Parameters='+JSON.stringify(Parameters)
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) { //this was a success
			Data = JSON.parse(http.responseText);
			ReturnFunction(Data.Data);
		}
	}

	console.log("Calling API function "+FunctionName, "fq34j89fj89w8jw4w", params);

	http.send(params);
}

module.exports = CallApi;
