/*
Info for handling API icons
- https://openweathermap.org/weather-conditions
Info for handling icons
- https://fontawesome.com/search?q=close&o=r&m=free
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootStore } from "../state/store";
import { formatTimestampToHours } from "../utils/dateUtils";

function WeatherTimeline() {
	const weatherState = useSelector((state: RootStore) => state.weather);

	return (
		<div className="wa-weather-timeline-wrapper">
			<div className="wa-date-wrapper">
				<span className="wa-title">
					Monday, <span className="wa-text">15.05.</span>
				</span>
			</div>
			<div className="wa-sun-wrapper">
				<h2 className="heading">
					<FontAwesomeIcon icon={faCircleUp} /> Sunrise
				</h2>
				{weatherState.data?.sys.sunrise && (
					<p className="wa-value">
						{formatTimestampToHours(weatherState.data.sys.sunrise)}
						<span className="wa-mesure-sign">h</span>
					</p>
				)}
			</div>
			<div className="wa-sun-wrapper">
				<h2 className="heading">
					<FontAwesomeIcon icon={faCircleDown} /> Sunset
				</h2>
				{weatherState.data?.sys.sunset && (
					<p className="wa-value">
						{formatTimestampToHours(weatherState.data?.sys.sunset)}
						<span className="wa-mesure-sign">h</span>
					</p>
				)}
			</div>
		</div>
	);
}

export default WeatherTimeline;
