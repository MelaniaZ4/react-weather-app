import React from "react";
import axios from 'axios';
import SearchEngine from "./SearchEngine";
import './Weather.css';
import Forecast from "./Forecast";

export default function Weather(props){
    function handleResponse(response){
        console.log(`The temperature in ${props.city} is ${response.data.main.temp}`);
    }

    console.log(props.city);
    
    let apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return(
    <div>
        <SearchEngine />
        <h1 className="city">{props.city}</h1>
        <div>
            <ul className="overview">
                <li>
                Last updated: <span>Monday, 16:30</span>
                </li>
                <li>Light rain</li>
            </ul>
        </div>
        <div>
      <div className="row">
        <div className="col-3">
          <div className="clear-fix">
            <img
              src="http://openweathermap.org/img/wn/10n@2x.png"
              alt="light rain"
              className="float-left"
            ></img>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-temperature">
            <span className="temperature">
              8
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
              <span> 6</span>
              °C
            </li>
            <li>
              Humidity:
              <span> 73</span>%
            </li>
            <li>
              Wind:
              <span> 2 </span>
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
}
