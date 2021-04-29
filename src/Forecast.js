import React, { useEffect, useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    console.log(forecast);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
      }

if(loaded) {
  return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
    
} else {  
  const apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
}
}