import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props){


    function handleResponse(response){
    console.log(response.data);
      }

    const apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    let longitude = 45;
    let latitude = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);


    return (
      <div className="row forecast-element">
        <div className="col-2">
            <h3 className="forecast-day">
              Tue
            </h3>
            <WeatherIcon code="01d" size={36} />
            <div className="weather-forecast-temperature">
                <strong className="temperature-high">
                  17° {" "}
                </strong> 
                <span className="temperature-low">
                  12°C
                  </span>  
            </div>
        </div>
      </div>
    )
}


// const apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=${apiKey}&units=metric`;
    // // axios.get(url).then(handleResponse);

    // https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=f90893641239a4e3a1553d63b8e2a1a9