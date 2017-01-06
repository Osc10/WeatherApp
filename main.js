$(".rainy, .stormy, .starry, .sunny, .snowy, .cloudy, .temperatureC, .temperatureF").hide();

$(function() {
	$.get("http://ipinfo.io", function(response) {
		$.ajax({	
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + response["city"] + "&APPID=0e28df2e09df619941b8e264d75a4a78" ,
			success: function(data) {
				$(".location").html(data["name"] + ", " + data["sys"]["country"]);
				$(".temperatureC").html(Math.floor((data["main"]["temp"] - 273.15)*10)/10 + "&degC").fadeIn(1000);
				$(".temperatureF").html((Math.floor(((data["main"]["temp"] - 273.15)*(9/5) + 32)*10)/10) + "&degF");
				$(".description").html(data["weather"][0]["main"])
				switch (data["weather"][0]["icon"]) {
					case "01d":
						$(".sunny").fadeIn(2000);
						break;
					case "02d":
						$(".sunny, .cloudy").fadeIn(2000);
						break;
					case "03d":
						$(".cloudy").fadeIn(2000);
						break;
					case "04d":
						$(".cloudy").fadeIn(2000);
						break;
					case "09d":
						$(".rainy").fadeIn(2000);
						break;
					case "10d":
						$(".sunny, .rainy").fadeIn(2000);
						break;
					case "11d":
						$(".stormy").fadeIn(2000);
						break;
					case "13d":
						$(".snowy").fadeIn(2000);
						break;
					case "50d":
						$(".cloudy").fadeIn(2000);
						break;
					case "01n":
						$(".starry").fadeIn(2000);
						break;
					case "02n":
						$(".starry, .cloudy").fadeIn(2000);
						break;
					case "03n":
						$(".cloudy").fadeIn(2000);
						break;
					case "04n":
						$(".cloudy").fadeIn(2000);
						break;
					case "09n":
						$(".rainy").fadeIn(2000);
						break;
					case "10n":
						$(".starry, .rainy").fadeIn(2000);
						break;
					case "11n":
						$(".stormy").fadeIn(2000);
						break;
					case "13n":
						$(".snowy").fadeIn(2000);
						break;
					case "50n":
						$(".cloudy").fadeIn(2000);
						break;
				}
			},
		});
}, "jsonp");

	$(".temperatureC").on("click", function() {
		$(this).fadeOut(750, function() {
			$(".temperatureF").fadeIn(750);
		});
	});

	$(".temperatureF").on("click", function() {
		$(this).fadeOut(750, function() {
			$(".temperatureC").fadeIn(750);
		});
	});
});


				/*$.ajax({
					url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyDJ0_ZGAlL3iURWhkU_rpMvCcis9tw5ifw",
					success: function(object) {
						var city = object["results"][0]["address components"][5]["long_name"]
						console.log(city)*/


