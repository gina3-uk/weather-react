import React, { useState } from "react";

export default function TemperatureInfo(props) {
  const [unit, setUnit] = useState("celsuis");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }

  if (unit === "celsuis") {
    return (
      <div className="TemperatureInfo">
        Temperature:{" "}
        <span className="temperature">{Math.round(props.celsuis)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureInfo">
        Temperature:{" "}
        <span className="temperature">
          {Math.round((props.celsuis * 9) / 5 + 32)}
        </span>
        <span className="unit">
          <a href="/" onClick={showCelsuis}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
