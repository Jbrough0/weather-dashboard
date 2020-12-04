// var city="";
// var searchCity=$("#search-city");
//var searchButton=$("#search-button").val();
// var clearButton=$("#clear-button");
// var currentUvindex=$("#uv-index");
// var currentCity=$("#current-city");
// var currentTemperature=$("#temperature");
// var currentHumidity=$("#humidity");
// var currentWSpeed=$("#wind-speed");
// var sCity=[];
var lat = "";
var lon = "";

// //Global veriabal
var userCity = "";

// function find(c){
//     for (var i=0; i<sCity.length; i++){
//         if(c.toUpperCase()===sCity[i]){
//             return -1;
//         }
//     }
//     return 1;
// }

var APIKey = "&appid=74e0dbda9a9ba1f2046e6d81f6487cfa";
var quearyurl = "https://api.openweathermap.org/data/2.5/weather?q=";
var imperialUnits = "&units=imperial";
//Search button onClick event
$('#search-button').on("click", function () {
    userCity = $("#city-search").val().trim();
    console.log(userCity);
    var newUrl = quearyurl + userCity + imperialUnits + APIKey;
    var uvquaryurl = "https://api.openweathermap.org/data/2.5/uvi?Lat=" + lat + '&lon=' + lon + APIKey
    runqueary(newUrl)

});
// $('#search-button').on("click", function(){
// //Get City Value from user input
// userCity= $("#city-search").val().trim();
// console.log(userCity);
// })
function runqueary(quaryurl) {
    $.ajax({
        url: quaryurl,
        method: "GET"

    }).done(function (weatherdata) {
        console.log(weatherdata)
        var weatherinfo = $("<div>");
        weatherinfo.addClass("weather");
        $("#current-city").append(weatherinfo);

        $(".weather").append("<h2>" + "City:" + weatherdata.name + "</h2>");
        $(".weather").append("<h2>" + "Temperature:" + weatherdata.main.temp + "</h2>");
        $(".weather").append("<h2>" + "Humidity:" + weatherdata.main.humidity + "</h2>");
        $(".weather").append("<h2>" + "Wind-Speed:" + weatherdata.wind.speed + "</h2>");
        lat = weatherdata.coord.lat
        lon = weatherdata.coord.lon
        console.log(lon)
        console.log(lat)
        runuvqueary(lat, lon)
        futureeweather(lat, lon)


        //console.log(weatherdata.list[0].main.temp)
        //console.log(weatherdata.list[0].main.humidity)
        //console.log(weatherdata.list[0].wind.speed)

    })
}

//var uvquaryurl="http://api.openweathermap.org/data/2.5/uvi?Lat="+lat+'&lon='+lon+'&appid='+APIKey

function runuvqueary(lat, lon) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + '&lon=' + lon + APIKey,
        method: "GET"
    })
        .done(function (weatherdata) {
            console.log(weatherdata)
            var weatherinfo = $("<div>");
            weatherinfo.addClass("weather");
            $("#current-city").append(weatherinfo);
            $(".weather").append("<h2>" + weatherdata[0].value + "</h2>");
        })
}

//var i;
//for (i = 0; i < weatherdata.length; i++) {
//text += weatherdata.list[i] + "<br>";

function futureeweather(lat, lon) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + lon + APIKey,
        method: "GET"
    })
        .done(function (forecastdata) {
            //Loop over forcast data, grab temp, humidy, wind placing it on page
            console.log(forecastdata);
            $(".weather").append("<h2>" + forecastdata.lat + "</h2>");
            $(".weather").append("<h2>" + forecastdata.lon + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[0].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[1].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[2].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[3].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[4].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[5].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[6].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[7].humidity + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[0].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[1].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[2].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[3].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[4].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[5].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[6].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[7].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[0].wind.speed + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[0].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[1].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[2].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[3].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[4].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[5].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[6].temp + "</h2>");
            $(".weather").append("<h2>" + forecasteddata.daily[7].temp + "</h2>");
        })}