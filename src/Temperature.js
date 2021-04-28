import react from "react";
import "./Temperature.css";

export default function Temperature (){

return (
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
    )
}