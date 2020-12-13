import React from "react";
import "./App.css";
import Weather from "./Weather.js";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

export default function App() {
  return (
    <div className="App">
      <Weather />
      <small>Coded by <a href = "https://github.com/elizhadjinian/weather-app-react" target="blank">Elizabeth Hadjinian</a></small>
    </div>
  );
}

