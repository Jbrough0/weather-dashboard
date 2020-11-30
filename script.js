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

// //Global veriabal
// var userCity="";

// function find(c){
//     for (var i=0; i<sCity.length; i++){
//         if(c.toUpperCase()===sCity[i]){
//             return -1;
//         }
//     }
//     return 1;
// }

var APIKey="&appid=74e0dbda9a9ba1f2046e6d81f6487cfa";
var quearyurl="http://api.openweathermap.org/data/2.5/forecast?q=";
var imperialUnits = "&units=imperial";
//Search button onClick event
//$('#search-button').on("click", function () {
    //userCity = $("#city").val().trim();
    var newUrl= quearyurl + userCity +imperialUnits + APIKey;
    runqueary(newUrl)
//});
// $('#search-button').on("click", function(){
// //Get City Value from user input
// userCity= $("#city-search").val().trim();
// console.log(userCity);
// })
function runqueary(quaryurl){
    $.ajax({
        url: quaryurl,
        method:"GET"

    }).done(function (weatherdata){
        console.log(weatherdata)
        console.log(weatherdata.list[0].main.temp)
        console.log(weatherdata.list[0].main.humidity)
        console.log(weatherdata.list[0].main.uv)
        console.log(weatherdata.list[0].wind.speed)

    })
}
