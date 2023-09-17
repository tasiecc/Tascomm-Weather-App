// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};
weather.temperature = {
    unit: "celsius"
};

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "fa442b80a038adb12511bd4ce6a75b91";

// Function to update background color based on weather conditions (dummy logic)
function updateBackgroundColor(weatherDescription) {
    const body = document.body;
    if (weatherDescription.includes("rain")) {
        body.style.backgroundColor = "#3498db"; // Blue for rain
    } else if (weatherDescription.includes("sunny")) {
        body.style.backgroundColor = "#f39c12"; // Orange for sunny
    } else {
        body.style.backgroundColor = "#2ecc71"; // Green for other conditions
    }
}

// Function to update weather information and background color
function updateWeather(data) {
    // Update weather information
    iconElement.innerHTML = `<img src="icons/${data.iconId}.png"/>`;
    tempElement.innerHTML = `${data.temperature.value}°<span>${data.temperature.unit}</span>`;
    descElement.innerHTML = data.description;
    locationElement.innerHTML = `${data.city}, ${data.country}`;

    // Update background color based on weather description
    updateBackgroundColor(data.description);
}

// C to F conversion
function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            // After fetching data, update weather information and background color
            updateWeather(weather);
        });
}

// SET USER'S POSITION
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}
