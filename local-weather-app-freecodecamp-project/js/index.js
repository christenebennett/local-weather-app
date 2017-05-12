var weatherCodeImageMap = {
  800: "01d",
  200: "11d",
  201: "11d",
  202: "11d",
  210: "11d",
  211: "11d",
  212: "11d",
  221: "11d",
  230: "11d",
  231: "11d",
  232: "11d",
  300: "09d",
  301: "09d",
  302: "09d",
  310: "09d",
  311: "09d",
  312: "09d",
  313: "09d",
  314: "09d",
  321: "09d",
  500: "10d",
  501: "10d",
  502: "10d",
  503: "10d",
  504: "10d",
  511: "13d",
  520: "09d",
  521: "09d",
  522: "09d",
  531: "09d",
  600: "13d",
  601: "13d",
  602: "13d",
  611: "13d",
  612: "13d",
  615: "13d",
  616: "13d",
  620: "13d",
  621: "13d",
  622: "13d",
  701: "50d",
  711: "50d",
  721: "50d",
  731: "50d",
  741: "50d",
  751: "50d",
  761: "50d",
  762: "50d",
  771: "50d",
  781: "50d",
  801: "02d",
  802: "03d",
  803: "04d",
  804: "04d"
};
$(document).ready(function() {
  $.getJSON("http://ip-api.com/json", function (location) {
    
    var lat = location.lat;
    var lon = location.lon;
    var region = location.region;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=19ef03af377a5b855dacf49a9b8f5c6c", function (data) {
      
      var currentTempF = Math.floor(data.main.temp * (9/5) - 459.67) + "&deg F";
			var currentTempC = Math.floor(data.main.temp - 273.15) + "&deg C";
      $(".location").html(data.name + ", " + region);
      $(".temp").html(currentTempF);
      $(".description").html(data.weather[0].description);
      $("#celsiusConvert").click(function() {
			  $(".temp").html(currentTempC);
				});
			$("#fahrenheitConvert").click(function() {
        $(".temp").html(currentTempF);
				});
      
      var weatherCode = data.weather[0].id;
      
      $(".weatherGraphic").append("<img src='http://openweathermap.org/img/w/" + weatherCodeImageMap[weatherCode] + ".png' />");
    });
  });
});