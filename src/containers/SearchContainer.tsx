/*
Info for handling API icons
- https://openweathermap.org/weather-conditions
Info for handling icons
- https://fontawesome.com/search?q=close&o=r&m=free
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCircleUp,
	faCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import { currentWeather } from "../App";
import SearchForm from "../components/SearchForm";
import Divider from "../components/Divider";

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
				<p className="wa-value">
					{currentWeather.main.temp.toFixed(0)}
					<span className="wa-mesure-sign">°C</span>
				</p>
				<p>{currentWeather.weather[0].main}</p>
			</div>
			<Divider />
			<div className="wa-date-sun-wrapper">
				<div className="wa-date-wrapper">
					<span className="wa-title">
						Monday, <span className="wa-text">15.05.</span>
					</span>
				</div>
				<div className="wa-sun-wrapper">
					<h2 className="heading">
						<FontAwesomeIcon icon={faCircleUp} /> Sunrise
					</h2>
					<p className="wa-value">
						05:30
						<span className="wa-mesure-sign">h</span>
					</p>
				</div>
				<div className="wa-sun-wrapper">
					<h2 className="heading">
						<FontAwesomeIcon icon={faCircleDown} /> Sunset
					</h2>
					<p className="wa-value">
						21:14
						<span className="wa-mesure-sign">h</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Search;
