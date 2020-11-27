import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [statement, setStatement] = useState(null);
  let [descriptionStatement, setDescriptionStatement] = useState(null);
  let [statementHumidity, setStatementHumidity] = useState(null);
  let [statementWindSpeed, setStatementWindspeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setStatement(`Temperature: ${Math.round(response.data.main.temp)}`);
    setDescriptionStatement(
      `Description: ${response.data.weather[0].description}`
    );
    setStatementHumidity(
      `Humidity: ${Math.round(response.data.main.humidity)}%`
    );
    setStatementWindspeed(`Windspeed: ${response.data.wind.speed}km/h`);
    setIcon(
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
      />
    );
  }

  function Searching(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc2204f2285bd1d52f09483093f391ff&units=metric`;
    axios.get(url).then(showTemperature);
  }

  return (
    <form onSubmit={Searching}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="search" />
      <ul>
        <li>{statement}</li>
        <li>{descriptionStatement}</li>
        <li>{statementHumidity}</li>
        <li>{statementWindSpeed}</li>
        <li>{icon}</li>
      </ul>
    </form>
  );
}
