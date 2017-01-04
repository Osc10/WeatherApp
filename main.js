$(function() {
	$("button").on("click", function() {
		if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position) {
      			var lat = position.coords.latitude;
      			var lon = position.coords.longitude;

				$.ajax({	
					url: "http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + lat  + "&lon=" + lon + "&APPID=0e28df2e09df619941b8e264d75a4a78",
					success: function(data) {
						console.log(data);
					},
				});
			});	
 		};
	});
});


				/*$.ajax({
					url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyDJ0_ZGAlL3iURWhkU_rpMvCcis9tw5ifw",
					success: function(object) {
						var city = object["results"][0]["address components"][5]["long_name"]
						console.log(city)*/


