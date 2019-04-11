const API_KEY = "3077c64deadc0d65b0966ab51530c5d6";

function handleFormSubmit(e) {
      e.preventDefault();
      var city=document.getElementById("city").value;
      fetchCurrentWeather(city);
      fetchFiveDayForecast(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3077c64deadc0d65b0966ab51530c5d6`)
  .then(response => response.json())
  .then(json => displayCurrentWeather(json));
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  document.getElementById("temp").innerHTML =json.main.temp;
  document.getElementById("low").innerHTML =json.main.temp_min;
  document.getElementById("high").innerHTML =json.main.temp_max;
  document.getElementById("humidity").innerHTML =json.main.humidity;
  document.getElementById("cloudCover").innerHTML =json.clouds.all;
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=3077c64deadc0d65b0966ab51530c5d6`)
  .then(response => response.json())
  .then(json => displayFiveDayForecast(json));
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  document.getElementById("precipitation").innerHTML =json.forecast.time.temp;
  document.getElementById("windDirection").innerHTML =json.main.temp_min;
  document.getElementById("windSpeed").innerHTML =json.time.temp_max;
  document.getElementById("temperature").innerHTML =json.main.temp;
  document.getElementById("pressure").innerHTML =json.main.pressure;
  document.getElementById("humidity").innerHTML =json.main.humidity;
  document.getElementById("clouds").innerHTML =json.clouds.all;
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById("cityForm").addEventListener("submit", handleFormSubmit);
});
