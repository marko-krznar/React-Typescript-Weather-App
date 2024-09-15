import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, AppDispatch } from "../state/store";
import { useEffect } from "react";
import { fetchWeatherByCity } from "../state/weather/weatherSlice";
import { fetchFiveDayForecastByCity } from "../state/weather/fiveDayForecastSlice";

function WeatherInfo() {
	const weatherState = useSelector((state: RootStore) => state.weather);
	const dispatch = useDispatch<AppDispatch>();
	const weatherData = weatherState.data;

	useEffect(() => {
		dispatch(fetchWeatherByCity("Zagreb"));
		dispatch(fetchFiveDayForecastByCity("Zagreb"));
	}, [dispatch]);

	if (weatherState.status === "loading") {
		return <div>Loading...</div>;
	}

	if (weatherState.status === "failed") {
		return <div>Error: {weatherState.error}</div>;
	}

	if (!weatherData) {
		return <div>No weather data available.</div>;
	}

	const renderCityName = () => {
		if (weatherState?.data?.name === "Donji grad") return "Zagreb";

		return weatherState?.data?.name;
	};

	return (
		<div className="wa-weather-info">
			<div className="wa-location">
				<FontAwesomeIcon icon={faLocationDot} />
				<span>{`${renderCityName()}, ${
					weatherState?.data?.sys.country
				}`}</span>
			</div>
			<div className="wa-image-wrapper">
				<img
					src={`https://openweathermap.org/img/wn/${weatherState?.data?.weather[0].icon}@4x.png`}
					alt={weatherState?.data?.weather[0].description}
				/>
			</div>
			<div className="wa-curreny-content-wrapper">
				<p className="wa-value">
					{weatherState?.data?.main.temp.toFixed(0)}
					<span className="wa-mesure-sign">°C</span>
				</p>
				<p>{weatherState?.data?.weather[0].main}</p>
				{weatherState?.data?.rain && (
					<div className="wp-chip">
						<span className="wa-rain-text">
							{weatherState?.data?.rain &&
								weatherState?.data?.rain["1h"] + " mm/h"}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default WeatherInfo;
