import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          <h3>{props.data.city}</h3>
        </li>
        <li className="pt-2">
          <h4>
            <i>
              <FormattedDate />
            </i>
          </h4>
        </li>
        <li className="mainTemp">
          Temperature: {Math.round(props.data.temperature)}°C
        </li>
        <li className="secondaryTemps">
          Max temp: {Math.round(props.data.max)}°C
        </li>
        <li className="secondaryTemps">
          Min temp: {Math.round(props.data.min)}°C{" "}
        </li>
        <li>Wind speed: {Math.round(props.data.wind * 2.237)} mph</li>
        <li>Humidity: {Math.round(props.data.humidity)} %</li>
        <li>
          {props.data.description}
          <br />
          <WeatherIcon code={props.data.icon} size={50} />
        </li>
        <br />
      </ul>
    </div>
  );
}
