import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          <h3>{props.data.city}</h3>
        </li>
        <li>
          <h4>
            <i>
              <FormattedDate />
            </i>
          </h4>
        </li>
        <li>Temperature: {Math.round(props.data.temperature)}°C </li>
        <li>Max temp: {Math.round(props.data.max)}°C </li>
        <li>Min temp: {Math.round(props.data.min)}°C </li>
        <li>Wind speed: {Math.round(props.data.wind * 2.237)} mph</li>
        <li>Humidity: {Math.round(props.data.humidity)} %</li>
        <li>
          {props.data.description}
          <img src={props.data.icon} alt={props.data.description} />
        </li>
      </ul>
    </div>
  );
}
