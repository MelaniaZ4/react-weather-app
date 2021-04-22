import React from "react";
import "./Forecast.css";

export default function Forecast(props){

let weatherIcon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

    return (
        <div class="col-2">
            <h3 className="forecast-day">
              {props.day}
            </h3>
            <img src={weatherIcon} alt="sunny" id="day1-icon">
            </img>
            <div className="weather-forecast-temperature">
                <strong className="temperature-high">
                  {props.temperature}°
                </strong>   
            </div>
        </div>
    )
}
