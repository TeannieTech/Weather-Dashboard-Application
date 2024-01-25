// API key
var APIKey = "45d3854aa85165b7c252646f0068a8af";

// collect user input for just the city name and store it in a variable,
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;



$(document).ready(function(){
    // Get value on button click and show alert
    $("#search-button").click(function(){
        var cityInput = $("#search-input").val();
        alert("this works" + cityInput);
    });
});



//fetch
// fetch(queryURL)




// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//to do
// Remember that the query URL won't work automatically as it's written. You'll need to adjust your application to accept user input, to store in the city variable that you've created.