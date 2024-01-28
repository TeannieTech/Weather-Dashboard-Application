// API key
var apiKey = "cead2a3023567e3257c8bf4d76c421c3";
var date = dayjs().format("DD MM YYYY");



// collect user input for just the city name and store it in a variable,


// var queryURL = https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`


$(document).ready(function(){
    var city;
    var lat;
    // Get value on button click and show alert
    $("#search-button").click(function(event){
        event.preventDefault()
        var cityInput = $("#search-input").val();
        // alert("this works" + cityInput);
        city=cityInput
        displayWeather(city)
        
    });
});


// displayWeather () 

function displayWeather (city) {
    
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

// console.log("check")
    fetch(queryURL)
    .then(function (response) { 
        // console.log("check then")
        return response.json();
    })
    .then(function (data) {
        showData(data)
        console.log(data, "this is the data")

        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey)
        .then(function (response) { 
            console.log("secondapi")
            return response.json();
        })
        .then(function (data) {
            // showData(data)
            console.log(data, "this is 5day  data")


//need to find arrays
        for (var i = 0; i < data.length; i++) {
            
        }
    });


})
}

function showData (data) {

    $(".location").append (data.name + " " + date);
    $(".temp").append (data.main.temp )
    $(".wind").append (data.wind.speed)
    $(".humidity").append (data.main.humidity)

    //5day data
    // $(".forecastimg1").append (data.list.main.temp)

}



//NEW BUTTONS - call function inside event listener
// var newButtons []

// function createButton {


// addButton= $(“<button>”)
// addButton.text(“testbutton”)
// $(‘body’).append(history)


//add event listener or add to old event listener

//for loop 
// for (var i = 0; i < newButtons.length; i++) {

            
// }
// }




//display buttons




// var nextday= dayjs().calendar(null, {
//     nextDay: '[Tomorrow]'
//   })


// function showForecast (data) {
// var URL = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={cead2a3023567e3257c8bf4d76c421c3}
// fetch(URL)
// .then(function (re sponse) { 
//     // console.log("check then")
//     return response.json();
// })
// .then(function (data) {
//     showData(data)
//     console.log(data, "this future dates")

// }




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
    // $(".tempC").text("Temperature (C) " + tempC.toFixed(2))
//     // Log the resulting object


