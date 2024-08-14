import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWind,
	faTemperatureArrowUp,
	faTemperatureArrowDown,
	faDroplet,
	faEye,
	faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootStore } from "../state/store";

import WeatherHighlightCard from "./WeatherHighlightCard";

function WeatherHighlights() {
	const weatherState = useSelector((state: RootStore) => state.weather);
	const weatherArray = [
		{
			iconName: <FontAwesomeIcon icon={faWind} />,
			itemName: "Wind",
			value: weatherState?.data?.wind.speed,
			measureUnit: "km/h",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowUp} />,
			itemName: "Max Temperature",
			value: weatherState?.data?.main.temp_max,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowDown} />,
			itemName: "Min Temperature",
			value: weatherState?.data?.main.temp_min,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faDroplet} />,
			itemName: "Humidity",
			value: weatherState?.data?.main.humidity,
			measureUnit: "%",
		},
		{
			iconName: <FontAwesomeIcon icon={faEye} />,
			itemName: "Visibility",
			value: weatherState?.data?.visibility,
			measureUnit: "km",
		},
		{
			iconName: <FontAwesomeIcon icon={faCloud} />,
			itemName: "Pressure",
			value: weatherState?.data?.main.pressure,
			measureUnit: "hpa",
		},
	];

	return (
		<div className="wa-cards">
			<span className="wa-title">Today's Highlights</span>
			<div className="wa-cards-wrapper">
				{weatherArray.map((weatherItem) => (
					<WeatherHighlightCard
						key={weatherItem.itemName}
						icon={weatherItem.iconName}
						item={weatherItem.itemName}
						value={weatherItem.value}
						mesure={weatherItem.measureUnit}
					/>
				))}
			</div>
		</div>
	);
}

export default WeatherHighlights;
