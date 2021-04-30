import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
            <div className="col-3 float-left">
              <div className="clear-fix">
                <WeatherIcon code={props.data.icon} />
              </div>
            </div>
            <span className="float-left">
              <Temperature celsius={props.data.temperature} />
            </span>
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