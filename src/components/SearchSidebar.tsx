/*
Info for handling API icons
- https://openweathermap.org/weather-conditions
Info for handling icons
- https://fontawesome.com/search?q=close&o=r&m=free
*/

import { currentWeather } from "../App";
import SearchForm from "./SearchForm";

function Search() {
	console.log("currentWeather", currentWeather);

	const date = new Date(currentWeather.dt * 1000);
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayName = dayNames[date.getUTCDay()];
	const day = String(date.getUTCDate()).padStart(2, "0");
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	const year = date.getUTCFullYear();
	const formattedDate = `${dayName}, ${day}.${month}.${year}`;

	return (
		<div className="wa-search-wrapper">
			<SearchForm />
			<h1>{currentWeather.name}</h1>
			<div>
				<img
					src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
					alt={currentWeather.weather[0].description}
				/>
			</div>
			<p>{formattedDate}</p>
			<p>{currentWeather.main.temp}</p>
			<p>{currentWeather.weather[0].main}</p>
		</div>
	);
}

export default Search;
