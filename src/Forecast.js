import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ac730adc7d8efa5c2d9bf7cf3f38ab81";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="Forecast">
      <ul>
        <li>
          <h3>5 Day Forecast</h3>
        </li>
        <li>
          <h4 className="ForecastDay">
            <i>Monday 6th Jan</i>
          </h4>
        </li>
        <li className="ForecastTemp">
          Temperature: 20°C | Max 22°C | Min 17°C|
        </li>
        <li>
          <WeatherIcon code="01d" size={30} />
        </li>
      </ul>
    </div>
  );
}
