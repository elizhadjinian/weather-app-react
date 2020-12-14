import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import Current from "./Current.js"


export default function App() {
  return (
    <div>
    <div className="App">
      <Current />
      <Weather />
      </div>
      <p className = "Credit"><small >Coded by <a href = "https://github.com/elizhadjinian/weather-app-react" target="blank">Elizabeth Hadjinian</a></small>
    </p></div>
  );
}

