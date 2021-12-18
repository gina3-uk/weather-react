import "./search.css";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ac730adc7d8efa5c2d9bf7cf3f38ab81";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(displayForecast);
  }

  function displayForecast(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <button className="btn search" type="Submit">
          Search
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <h3>{weather.cityName}</h3>
          </li>
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li>Wind speed: {Math.round(weather.wind * 2.237)} mph</li>
          <li>Feels Like: {Math.round(weather.temperature)}°C </li>
          <li>Humidity: {Math.round(weather.humidity)} %</li>
          <li>
            {weather.description}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
