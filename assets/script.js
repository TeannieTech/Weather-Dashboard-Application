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
    createButton(city);
  });
});

// displayWeather ()

function displayWeather(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

  fetch(queryURL)
    .then(function (response) {
      // console.log("check then")
      return response.json();
    })
    .then(function (data) {
      showData(data);
      console.log(data, "this is the data");

      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey + "&units=metric")
        .then(function (response) {
          console.log("secondapi");
          return response.json();
        })
        .then(function (data) {
          // showData(data)
          console.log(data, "this is 5day  data");
          showFiveDay(data);


        fetch("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1")
            .then(function (response) {
              console.log("icons");
              return response.json();
            })
            .then(function (data) {
              console.log(data, "this is icons");
            //   showFiveDay(data);

        });
    });
})
}

function showData(data) {
  $(".location").append(data.name + " " + date);
  $(".temp").append(data.main.temp + "ºC");
  $(".wind").append(data.wind.speed);
  $(".humidity").append(data.main.humidity);
  $(".todayimg").append(data.weather[0].icon);

  //5day data
  // $(".forecastimg1").append (data.list.[0]main.temp)
}

function showFiveDay(data5) {
  console.log(data5.list[0].main.temp, "show data");

  for (var i = 0; i < data5.list.length; i = i + 8) {
    // console.log(data5.list[i].main.temp, "5days", data5.list[i].dt_txt);
    console.log(dayjs.unix(data5.list[i].dt).format("DD MM YYYY"));

    $(".day1").append(dayjs.unix(data5.list[i].dt).format("DD MM YYYY"));
    // $(".day2").append(data.main.temp);
    // $(".day3").append(data.main.temp);
    // $(".day4").append(data.main.temp);
    // $(".day5").append(data.main.temp);
  }
}

//NEW BUTTONS - call function inside event listener

function createButton(city) {
  var newButtons = [city];

  // movie buttins
  for (var i = 0; i < newButtons.length; i++) {
    var a = $("<button>");
    // Adding a class
    a.addClass("added-button");
    // Adding a data-attribute with a value of the movie at index i
    a.attr("added-button", newButtons[i]);
    // Providing the button's text with a value of the movie at index i
    a.text(newButtons[i]);
    // Adding the button to the HTML
    $("#history").append(a);
  }
}

// addButton= $(“<button>”)
// addButton.text(“testbutton”)
// $(‘body’).append(history)
// $('<button>Test</button>')

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
