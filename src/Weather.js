import React, { useState } from "react";
import axios from 'axios';
import './Weather.css';
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function Weather(props){
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData ({
          ready: true,
          city: response.data.name,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          wind: response.data.wind.speed, 
          feelsLike: response.data.main.feels_like,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
        setReady(true);
    } 
    
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(){
    const apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
 
    if(ready){
    return(
    <div>
      <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-8">
          <input
            placeholder="Type city name"
            type="search"
            className="form-control"
            autoComplete="off"
            onChange={handleCityChange}
          ></input>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </div>
    </form>
        <h1 className="city">{weatherData.city}</h1>
        <div>
            <ul className="overview">
                <li>
                Last updated: 
                <span>
                <FormattedDate date={weatherData.date} />
                </span>
                </li>
                <li>{weatherData.description}</li>
            </ul>
        </div>
        <div>
      <div className="row">
        <div className="col-3">
          <div className="clear-fix">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            ></img>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-temperature">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>
              |<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels like: 
              <span> {Math.round(weatherData.feelsLike)}</span>
              °C
            </li>
            <li>
              Humidity:
              <span> {weatherData.humidity}</span>%
            </li>
            <li>
              Wind:
              <span> {Math.round(weatherData.wind)} </span>
              km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row weather-forecast">
        <Forecast temperature={15} day="Tue" icon="01d"/>
        <Forecast temperature={17} day="Wed" icon="01d"/>
        <Forecast temperature={18} day="Thu" icon="02d"/>
        <Forecast temperature={18} day="Fri" icon="11d"/>
        <Forecast temperature={17} day="Sat" icon="04d"/>
        <Forecast temperature={15} day="Sun" icon="03d"/>
      </div>
      </div>
    </div>
    );

} else {
    search()
    return (
      <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-8">
          <input
            placeholder="Type city name"
            type="search"
            className="form-control"
            autoComplete="off"
            onChange={handleCityChange}
          ></input>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </div>
    </form>
    )
}
}