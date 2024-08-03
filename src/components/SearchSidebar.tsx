/*
Info for handling API icons
- https://openweathermap.org/weather-conditions
Info for handling icons
- https://fontawesome.com/search?q=close&o=r&m=free
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { currentWeather } from "../App";
import SearchForm from "./SearchForm";
import Divider from "./Divider";

function Search() {
	console.log("currentWeather", currentWeather);

	return (
		<div className="wa-container wa-search-wrapper">
			<SearchForm />
			<Divider />
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
				<p className="wa-temp">
					{currentWeather.main.temp.toFixed(0)}
					<span className="wa-temp-sign">°C</span>
				</p>
				<p>{currentWeather.weather[0].main}</p>
			</div>
			<Divider />
			<div className="wa-app-info">
				<h1 className="heading">
					Welcome to the Weather App test project!
				</h1>
				<p className="wa-text">
					This application utilizes the OpenWeather API to fetch and
					display real-time weather data for any city.
				</p>
				<p className="wa-text">
					Simply enter a city name to see the current temperature,
					humidity, and weather conditions.
				</p>
				<p className="wa-text">
					The app is built with React and TypeScript, ensuring a
					robust and responsive user experience.
				</p>
			</div>
		</div>
	);
}

export default Search;
