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

  // document.querySelector(// ------------------------- date and time -------------------------
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
    // console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );

    document.querySelector(
      "#humidity"
    ).innerHTML = `${response.data.main.humidity} %`;
    document.querySelector("#wind").innerHTML = `${Math.round(
      response.data.wind.speed
    )} mph`;

    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;

    // document.querySelector(
    //   "#precipitation"
    // ).innerHTML = `${response.data.main.pressure}`;
  }

  // ------------------ more functions -----------------------------
  // function convertToFahrenheit(event) {
  //   event.preventDefault();
  //   let temperatureElement = document.querySelector("#temperature");
  //   temperatureElement.innerHTML = 66;
  // }

  // function convertToCelsius(event) {
  //   event.preventDefault();
  //   let temperatureElement = document.querySelector("#temperature");
  //   temperatureElement.innerHTML = 19;
  // }

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

  //   "#precipitation"
  // ).innerHTML = `${response.data.main.pressure}`;
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

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 19;
// }

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("San Francisco");
