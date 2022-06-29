// ------------------------- date and time -------------------------
let now = new Date();
let currentTempDate = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

let formattedDate = `${currentDay}, ${currentMonth} ${currentDate},
  ${currentHour}:${currentMinutes}`;

currentTempDate.innerHTML = formattedDate;

// ------------------------- weather -------------------------
function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity} %`;
  document.querySelector("#wind").innerHTML = Math.round(
    `${response.data.wind.speed} mph`
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  // ------------------------- weather -------------------------
  function showWeather(response) {
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let weatherElement = document.querySelector("#description");
    let weatherIconElement = document.querySelector("#weather-icon");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    fahrenheitTemperature = response.data.main.temp;

    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    weatherElement.innerHTML = `${response.data.weather[0].description}`;
    humidityElement.innerHTML = `${response.data.main.humidity} %`;
    windElement.innerHTML = `${Math.round(response.data.wind.speed)} mph`;

    weatherIconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  // ------------------ more functions -----------------------------

  function searchCity(city) {
    let apiKey = "03d92f987d088aa526bc3e5ee9cc2cbb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }

  function searchLocation(position) {
    let apiKey = "03d92f987d088aa526bc3e5ee9cc2cbb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
    console.log(apiUrl);

    axios.get(apiUrl).then(showWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);

  let currentLocationButton = document.querySelector(
    "#current-location-button"
  );
  currentLocationButton.addEventListener("click", getCurrentLocation);
}

// more functions
function searchCity(city) {
  let apiKey = "03d92f987d088aa526bc3e5ee9cc2cbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "03d92f987d088aa526bc3e5ee9cc2cbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=
    ${position.coords.latitude}
    &lon=${position.coords.longitude}
    &appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

//----------------temperature conversions---------------
function displayCelsiusTemperature(event) {
  event.preventDefault();
  let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  // alert("Link clicked");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

searchCity("San Francisco");

//------------variables--------------
let fahrenheitTemperature = null;

let celsiusConversionLink = document.querySelector("#celsius-conversion-link");
celsiusConversionLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitConversionLink = document.querySelector(
  "#fahrenheit-conversion-link"
);
fahrenheitConversionLink.addEventListener(
  "click",
  displayFahrenheitTemperature
);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
