import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast() {
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
          <WeatherIcon code="01d" size="30" />
        </li>
        <li>
          <h4 className="ForecastDay">
            <i>Tuesday 7th Jan</i>
          </h4>
        </li>
        <li className="ForecastTemp">
          Temperature: 20°C | Max 22°C | Min 17°C|
        </li>
        <li>
          <WeatherIcon code="01d" size="30" />
        </li>
        <li>
          <h4 className="ForecastDay">
            <i>Wednesday 8th Jan</i>
          </h4>
        </li>
        <li className="ForecastTemp">
          Temperature: 20°C | Max 22°C | Min 17°C|
        </li>
        <li>
          <WeatherIcon code="01d" size="30" />
        </li>
        <li>
          <h4 className="ForecastDay">
            <i>Thursday 9th Jan</i>
          </h4>
        </li>
        <li className="ForecastTemp">
          Temperature: 20°C | Max 22°C | Min 17°C|
        </li>
        <li>
          <WeatherIcon code="01d" size="30" />
        </li>
        <li>
          <h4 className="ForecastDay">
            <i>Friday 10th Jan</i>
          </h4>
        </li>
        <li className="ForecastTemp">
          Temperature: 20°C | Max 22°C | Min 17°C|
        </li>
        <li className="ForecastIcon">
          <WeatherIcon code="01d" size="30" />
        </li>
      </ul>
    </div>
  );
}
