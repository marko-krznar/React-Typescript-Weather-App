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

	// Convert the Unix timestamp to a datetime (Day, DD.MM.)
	const formatToDate = (unixTimestamp: number) => {
		const date = new Date(unixTimestamp * 1000);

		const dayName: string = date.toLocaleDateString("en-GB", {
			weekday: "long",
		});

		const day: string = date.toLocaleDateString("en-GB", {
			day: "2-digit",
		});

		const month: string = date.toLocaleDateString("en-GB", {
			month: "2-digit",
		});

		return (
			<span className="wa-title">
				{dayName},{" "}
				<span className="wa-text">
					{day}.{month}.
				</span>
			</span>
		);
	};

	return (
		<div className="wa-weather-timeline-wrapper">
			<div className="wa-date-wrapper">
				{weatherState?.data?.dt && formatToDate(weatherState.data.dt)}
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
