import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Search defaultCity="London" />
        <footer>
          This project was created by Gina Lewis. Open source code available on{" "}
          <a
            href="https://github.com/gina3-uk/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
          <br />
          <a
            href="https://www.linkedin.com/in/gina-lewis-98a96476/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://www.instagram.com/gina.lewis/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </footer>
      </div>
    </div>
  );
}
