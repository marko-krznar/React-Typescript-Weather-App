/*
Info for handling API icons
- https://openweathermap.org/weather-conditions
Info for handling icons
- https://fontawesome.com/search?q=close&o=r&m=free
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

function WeatherTimeline() {
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
	);
}

export default WeatherTimeline;
