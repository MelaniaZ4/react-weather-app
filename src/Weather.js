import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props){
    function handleResponse(response){
        alert(`The temperature in  ${props.city} is ${response.data.main.temp}`);
    }

    console.log(props.city);
    
    let apiKey = "f90893641239a4e3a1553d63b8e2a1a9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(url).then(handleResponse);

    return(
    <div>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
    );
}
