// API key
var apiKey = "cead2a3023567e3257c8bf4d76c421c3";
var date = dayjs().format("DD MM YYYY");

// collect user input for just the city name and store it in a variable,

// var queryURL = https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

$(document).ready(function () {
  var city;
  var lat;
  // Get value on button click and show alert
  $("#search-button").click(function (event) {
    event.preventDefault();
    var cityInput = $("#search-input").val();
    // alert("this works" + cityInput);
    city = cityInput;
    displayWeather(city);
  });
});

// displayWeather ()

function displayWeather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  // console.log("check")
  fetch(queryURL)
    .then(function (response) {
      // console.log("check then")
      return response.json();
    })
    .then(function (data) {
      showData(data);
      console.log(data, "this is the data");

      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          data.coord.lat +
          "&lon=" +
          data.coord.lon +
          "&appid=" +
          apiKey +
          "&units=metric"
      )
        .then(function (response) {
          console.log("secondapi");
          return response.json();
        })
        .then(function (data) {
          // showData(data)
          console.log(data, "this is 5day  data");
          showFiveDay(data);

          // need to find arrays - for 5 day??
          //         for (var i = 0; i < data.length; i++) {

          //         }
        });
    });
}

function showData(data) {
  $(".location").append(data.name + " " + date);
  $(".temp").append(data.main.temp);
  $(".wind").append(data.wind.speed);
  $(".humidity").append(data.main.humidity);

  //5day data
  // $(".forecastimg1").append (data.list.[0]main.temp)
}

function showFiveDay(data5) {
  console.log(data5.list[0].main.temp, "show data");

  for (var i = 0; i < data5.list.length; i=i+8) {
    console.log(data5.list[i].main.temp, "5days", data5.list[i].dt_txt);
    console.log(dayjs.unix(data5.list[i].dt).format("DD MM YYYY"))
  }
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

// var nextday= dayjs().calendar(null, {
//     nextDay: '[Tomorrow]'
//   })

//   // We store all of the retrieved data inside of an object called "data"
//   .then(function (data) {

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
