import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature (props){

const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("")
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

function fahrenheit(){
   return (props.celsius * 9/5) + 32;
}

if (unit === `celsius`) {
return (
    <div className="weather-temperature">
        <span className="temperature">
            {Math.round(props.celsius)}
        </span>
        <span className="units">
            <span className="active">°C{" "}</span>
            |<a href="/" onClick={convertToFahrenheit} >°F</a>
        </span>
    </div>
    );

} else {
    return (
        <div className="weather-temperature">
        <span className="temperature">
            {Math.round(fahrenheit())}
        </span>
        <span className="units">
            <a href="/" onClick={convertToCelsius} >
            °C {" "}
            </a>
            | <span className="active">°F</span>
        </span>
    </div>
    );
}
}