import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWind,
	faTemperatureArrowUp,
	faTemperatureArrowDown,
	faDroplet,
	faEye,
	faCloud,
} from "@fortawesome/free-solid-svg-icons";

import { currentWeather } from "../App";
import CardItem from "../components/CardItem";

function Cards() {
	const weatherArray = [
		{
			iconName: <FontAwesomeIcon icon={faWind} />,
			itemName: "Wind",
			value: currentWeather.wind.speed,
			measureUnit: "km/h",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowUp} />,
			itemName: "Max Temperature",
			value: currentWeather.main.temp_max,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowDown} />,
			itemName: "Min Temperature",
			value: currentWeather.main.temp_min,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faDroplet} />,
			itemName: "Humidity",
			value: currentWeather.main.humidity,
			measureUnit: "%",
		},
		{
			iconName: <FontAwesomeIcon icon={faEye} />,
			itemName: "Visibility",
			value: currentWeather.visibility,
			measureUnit: "km",
		},
		{
			iconName: <FontAwesomeIcon icon={faCloud} />,
			itemName: "Pressure",
			value: currentWeather.main.pressure,
			measureUnit: "hpa",
		},
	];

	return (
		<div className="wa-container wa-info-card-wrapper">
			<div className="wa-app-info">
				<h1 className="wa-title">
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
			<div className="wa-cards">
				<span className="wa-title">Today's Highlights</span>
				<div className="wa-cards-wrapper">
					{weatherArray.map((weatherItem) => (
						<CardItem
							key={weatherItem.itemName}
							icon={weatherItem.iconName}
							item={weatherItem.itemName}
							value={weatherItem.value}
							mesure={weatherItem.measureUnit}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Cards;
