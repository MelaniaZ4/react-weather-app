import React, { useEffect, useState } from 'react';
import './Forecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		const dailyData = response.data.list.filter((item) =>
			item.dt_txt.includes('12:00:00')
		);
		setForecast(dailyData);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 6) {
							return (
								<div
									className="col"
									key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
