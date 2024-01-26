// API key
var apiKey = "cead2a3023567e3257c8bf4d76c421c3";

// collect user input for just the city name and store it in a variable,


var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + "London,GB" + "&appid=" + apiKey;


// var queryURL = https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`


$(document).ready(function(){
    var city;
    // Get value on button click and show alert
    $("#search-button").click(function(event){
        event.preventDefault()
        var cityInput = $("#search-input").val();
        // alert("this works" + cityInput);
        city=cityInput
        displayWeather()
        });
});

// displayWeather () 

function displayWeather () {
console.log("check")
    fetch(queryURL)
    .then(function (response) { 
        console.log("check then")
        return response.json();
    })
    .then(function (data) {
        console.log(data)

 
//need to find arrays
        for (var i = 0; i < data.length; i++) {
            
            // $("#articles").append('<a href="' + data.response.docs[i].web_url + '">' + data.response.docs[i].headline.main + '</a>');
            // $("#articles").append('<br>');

        }
    });

}

// prevent default means dont refresh page. 


//   // We store all of the retrieved data inside of an object called "data"
//   .then(function (data) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(data);

//     // Transfer content to HTML
//     $(".city").html("<h1>" + data.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + data.wind.speed);
//     $(".humidity").text("Humidity: " + data.main.humidity);

//     // Convert the temp to Celsius
//     var tempC = data.main.temp - 273.15;

//     // add temp content to html
//     $(".temp").text("Temperature (K) " + data.main.temp);
//     $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

//     // Log the data in the console as well
//     console.log("Wind Speed: " + data.wind.speed);
//     console.log("Humidity: " + data.main.humidity);
//     console.log("Temperature (C): " + tempC);
//   });




// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//to do
// add buttons task
//bring in images
//use css to style
