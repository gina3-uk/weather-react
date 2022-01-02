import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <li>
        <h4 className="ForecastDate pt-1">
          <i>{day()}</i>
        </h4>
      </li>
      <li className="ForecastTemp">
        Temperature: {Math.round(props.data.temp.day)}°C | Max{" "}
        {Math.round(props.data.temp.max)}°C | Min{" "}
        {Math.round(props.data.temp.min)}°C
      </li>
      <li>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </li>
    </div>
  );
}
