import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { currentWeather } from "../App";

function WeatherInfo() {
	return (
		<div className="wa-weather-info">
			<div className="wa-location">
				<FontAwesomeIcon icon={faLocationDot} />
				<span>{`${currentWeather.name}, ${currentWeather.sys.country}`}</span>
			</div>
			<div>
				<img
					src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
					alt={currentWeather.weather[0].description}
				/>
			</div>
			<p className="wa-value">
				{currentWeather.main.temp.toFixed(0)}
				<span className="wa-mesure-sign">°C</span>
			</p>
			<p>{currentWeather.weather[0].main}</p>
		</div>
	);
}

export default WeatherInfo;
