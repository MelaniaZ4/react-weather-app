import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){

    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    }
    return(
    <div className="float-left">
        <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color= "#745858"
    size={64}
    animate={true}
  />
    </div>
    );
}