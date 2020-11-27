import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <small>Coded by <a href = "https://github.com/elizhadjinian/weather-app-react" target="blank">Elizabeth Hadjinian</a></small>
    </div>
  );
}

