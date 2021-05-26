// OPENWEATHERAPI KEY: 8b5e0537b2b17abc10e53b7116cb33e1

var button = document.querySelector("#btn")
var input = document.querySelector("#inputCity")
function daily(city){

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&appid=8b5e0537b2b17abc10e53b7116cb33e1")
    .then(res => res.json())
    .then(data => {
        var cityEl = document.getElementById("city")
        var temperatureEl = document.getElementById("temperature")
        var windEl = document.getElementById("wind")
        var humidityEl = document.getElementById("humidity")

        cityEl.textContent = data.name;
        temperatureEl.textContent = data.main.temp + "Farenheit";
        windEl.textContent = data.wind.speed;
        humidityEl.textContent = data.main.humidity + "%";
    })
}

function searchCity(){
    daily(input.value)
}

button.addEventListener("click", searchCity)