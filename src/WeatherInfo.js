import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {

    return (
<div>
    <h1 className="city">{props.data.city}</h1>
        <div>
            <ul className="overview">
                <li>
                Last updated: 
                <span>
                <FormattedDate date={props.data.date} />
                </span>
                </li>
                <li>{props.data.description}</li>
            </ul>
        </div>
        <div>
          <div className="row">
            <div className="col-3">
              <div className="clear-fix">
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                  className="float-left"
                ></img>
              </div>
            </div>
            <div className="col-3">
              <div className="weather-temperature">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
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
                  <span> {Math.round(props.data.feelsLike)}</span>
                  °C
                </li>
                <li>
                  Humidity:
                  <span> {props.data.humidity}</span>%
                </li>
                <li>
                  Wind:
                  <span> {Math.round(props.data.wind)} </span>
                  km/h
                </li>
              </ul>
            </div>
          </div>
           </div>
</div>
    );
    }