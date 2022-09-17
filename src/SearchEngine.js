import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function SearchEngine() {
  let [city, setcity] = useState("");
  let [load, setLoad] = useState(false);
  function show(event) {
    event.preventDefault();
    setcity(event.target.value);
  }

  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  function showWind(response) {
    setLoad(true);
    setWind(response.data.wind.speed);
  }
  function showHumidity(response) {
    setLoad(true);
    setHumidity(response.data.main.humidity);
  }
  function showDescription(response) {
    setLoad(true);
    setDescription(response.data.weather[0].description);
  }
  function showIcon(response) {
    setLoad(true);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function showTemperature(response) {
    setLoad(true);
    setTemperature(response.data.main.temp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apikey = "4b3503b2f08a729413c4d33ef1186004";
    let units = "metric";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    axios.get(apiurl).then(showTemperature);
    axios.get(apiurl).then(showDescription);
    axios.get(apiurl).then(showHumidity);
    axios.get(apiurl).then(showWind);
    axios.get(apiurl).then(showIcon);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city... " onChange={show} />
      <input type="submit" value="Search" />
    </form>
  );
  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
  
}
