import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootStore } from "../state/store";

function WeatherInfo() {
	const weatherState = useSelector((state: RootStore) => state.weather);

	return (
		<div className="wa-weather-info">
			<div className="wa-location">
				<FontAwesomeIcon icon={faLocationDot} />
				<span>{`${weatherState.name}, ${weatherState.sys.country}`}</span>
			</div>
			<div>
				<img
					src={`https://openweathermap.org/img/wn/${weatherState.weather[0].icon}@4x.png`}
					alt={weatherState.weather[0].description}
				/>
			</div>
			<p className="wa-value">
				{weatherState.main.temp.toFixed(0)}
				<span className="wa-mesure-sign">°C</span>
			</p>
			<p>{weatherState.weather[0].main}</p>
		</div>
	);
}

export default WeatherInfo;
