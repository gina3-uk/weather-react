import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecastLoaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (forecastLoaded) {
    return (
      <div className="Forecast">
        <ul>
          <li>
            <h3>Forecast</h3>
          </li>
          {forecastData.map(function (fourDayForecast, index) {
            if (index > 0 && index < 5) {
              return (
                <span key={index}>
                  <ForecastDay data={fourDayForecast} />
                </span>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    let apiKey = "ac730adc7d8efa5c2d9bf7cf3f38ab81";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
