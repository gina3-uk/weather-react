import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import FormattedDate from "./FormattedDate";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "ac730adc7d8efa5c2d9bf7cf3f38ab81";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(displayForecast);
  }

  function displayForecast(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
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
        <div class="row search-bar">
          <div class="col-sm-6">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              aria-label="Enter a city..."
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div class="col-sm-3">
            <button type="submit" className="g-3 btn search-button w-100">
              Search
            </button>
          </div>
          <div class="col-sm-3">
            <button type="submit" className="g-3 btn search-button w-100">
              Current
            </button>
          </div>
        </div>
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
            <h4>
              <i>
                <FormattedDate />
              </i>
            </h4>
          </li>
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li>Max temp: {Math.round(weather.max)}°C </li>
          <li>Min temp: {Math.round(weather.min)}°C </li>
          <li>Wind speed: {Math.round(weather.wind * 2.237)} mph</li>
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
