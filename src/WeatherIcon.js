import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colourMapping = {
    "01d": "YELLOW",
    "01n": "BLACK",
    "02d": "GREY",
    "02n": "GREY",
    "03d": "GREY",
    "03n": "GREY",
    "04d": "GREY",
    "04n": "GREY",
    "09d": "BLACK",
    "09n": "BLACK",
    "10d": "BLACK",
    "10n": "BLACK",
    "11d": "GREY",
    "11n": "GREY",
    "13d": "GREY",
    "13n": "GREY",
    "50d": "GREY",
    "50n": "GREY",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colourMapping[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
