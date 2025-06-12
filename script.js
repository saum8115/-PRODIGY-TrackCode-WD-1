function getWeather() {
    var city = document.getElementById("cityInput").value;
    var result = document.getElementById("result");

    if (city.toLowerCase() === "delhi") {
      result.textContent = "Delhi: 32°C, Sunny";
    } else if (city.toLowerCase() === "mumbai") {
      result.textContent = "Mumbai: 29°C, Humid";
    } else if (city.toLowerCase() === "london") {
      result.textContent = "London: 15°C, Cloudy";
    } else {
      result.textContent = "Weather data not available.";
    }
  }