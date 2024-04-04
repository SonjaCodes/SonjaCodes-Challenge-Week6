function displayWeather(response) {
  let temperatureElement = document.querySelector(
    "#temperature-currently-number"
  );
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;
}

function changeCity(event) {
  event.preventDefault();
  let changeCityElement = document.querySelector("#city");
  let city = changeCityElement.value;

  let apiKey = "a5t17f04278fdb4bf8e3eb7e4o1ab606";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let changeCityForm = document.querySelector("#enter-city");
changeCityForm.addEventListener("submit", changeCity);

let currentDateElement = document.querySelector("#rightNow");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
