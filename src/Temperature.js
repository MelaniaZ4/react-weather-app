import React from "react";
import "./Temperature.css";

export default function Temperature (props){

return (
    <div className="weather-temperature">
        <span className="temperature">
            {Math.round(props.celsius)}
        </span>
        <div className="units">
        <span>°C</span>
        </div>
    </div>
    );
}