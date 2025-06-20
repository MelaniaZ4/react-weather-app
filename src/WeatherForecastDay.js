import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

function minTemperature() {
  let temperature = Math.round(props.data.main?.temp_min);
  return `${temperature}`;
}

function maxTemperature() {
  let temperature = Math.round(props.data.main?.temp_max);
  return `${temperature}`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[day];
}

return (
<div>
    <div className="WeatherForecast-day">{day()}
    </div>
    <WeatherIcon code={props.data.weather[0].icon} size={40} 
    />
    <div className="WeatherForecast-temperatures">
    <span className="WeatherForecast-temperature-max">
        {maxTemperature()}
        °
        </span>
    <span className="WeatherForecast-temperature-min">
        {minTemperature()}
        °
        </span>
    </div>
</div>
);
}
