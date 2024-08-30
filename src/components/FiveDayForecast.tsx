/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../state/store";
import { fetchFiveDayForecastByCity } from "../state/weather/fiveDayForecastSlice";

function FiveDayForecast() {
	const dispatch = useDispatch<AppDispatch>();
	const fiveDayForecastState = useSelector(
		(state: RootStore) => state.fiveDayForecast
	);

	useEffect(() => {
		dispatch(fetchFiveDayForecastByCity("Zagreb"));
	}, [dispatch]);

	// Assuming you have the fiveDayForecastState.data.list array
	const weatherData: any = fiveDayForecastState.data?.list;

	// Extract unique dates from weather data
	const uniqueDates = [
		...new Set(
			weatherData?.map((entry: any) => entry.dt_txt.split(" ")[0])
		),
	];

	// Group data by unique dates
	const groupedDataByDate = uniqueDates.map((date) => {
		return {
			date,
			data: weatherData.filter((entry: any) =>
				entry.dt_txt.includes(date)
			),
		};
	});

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const today = new Date();

		// Check if the given date is today
		const isToday = date.toDateString() === today.toDateString();

		// Define options for formatting the day and month
		const options: any = { day: "numeric", month: "short" };

		// Get the formatted day and month (e.g., "30 Aug.")
		const dayMonth = date.toLocaleDateString("en-GB", options);

		if (isToday) {
			return `Today ${dayMonth}.`;
		} else {
			// Get the weekday (e.g., "Friday")
			const weekday = date.toLocaleDateString("en-GB", {
				weekday: "long",
			});
			return `${weekday} ${dayMonth}.`;
		}
	};

	return (
		<div className="wa-five-day-forecast">
			<span className="wa-title">Five day forecast</span>
			<div className="wa-table">
				<div className="wa-table-header-wrapper">
					<div className="wa-placeholder" />
					<div className="wa-table-columns-wrapper">
						<div className="wa-column">00:00</div>
						<div className="wa-column">03:00</div>
						<div className="wa-column">06:00</div>
						<div className="wa-column">09:00</div>
						<div className="wa-column">12:00</div>
						<div className="wa-column">15:00</div>
						<div className="wa-column">18:00</div>
						<div className="wa-column">21:00</div>
						{/* <div className="wa-column wa-column-temp">
						Temperature (low/high)
					</div>
					<div className="wa-column">Rain</div>
					<div className="wa-column">Wind</div> */}
					</div>
				</div>
				<div className="wa-table-body-wrapper">
					{groupedDataByDate.map((item: any, index: number) => {
						if (item.data.length < 8 && index === 0) {
							const placeholderNumber: number =
								8 - item.data.length;

							const renderPlaceholders = Array.from(
								{
									length: placeholderNumber,
								},
								() => (
									<div className="wa-column wa-column-placeholder" />
								)
							);

							return (
								<div
									key={item.date + index}
									className="wa-table-row-wrapper"
								>
									<div className="wa-column wa-column-today">
										{formatDate(item.date)}
									</div>
									<div className="wa-table-columns-wrapper">
										{renderPlaceholders}
										{item.data.map((hourWeather: any) => {
											return (
												<div className="wa-column wa-img-wrapper">
													<img
														src={`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@4x.png`}
														alt={
															hourWeather
																.weather[0]
																.description
														}
													/>
												</div>
											);
										})}
									</div>
								</div>
							);
						}

						if (item.data.length < 8 && index === 5) {
							const placeholderNumber: number =
								8 - item.data.length;

							const renderPlaceholders = Array.from(
								{
									length: placeholderNumber,
								},
								() => (
									<div className="wa-column wa-column-placeholder" />
								)
							);

							return (
								<div
									key={item.date + index}
									className="wa-table-row-wrapper"
								>
									<div className="wa-column wa-column-today">
										{formatDate(item.date)}
									</div>
									<div className="wa-table-columns-wrapper">
										{item.data.map((hourWeather: any) => {
											return (
												<div className="wa-column wa-img-wrapper">
													<img
														src={`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@4x.png`}
														alt={
															hourWeather
																.weather[0]
																.description
														}
													/>
												</div>
											);
										})}
										{renderPlaceholders}
									</div>
								</div>
							);
						}

						return (
							<div
								key={item.date + index}
								className="wa-table-row-wrapper"
							>
								<div className="wa-column wa-column-today">
									{formatDate(item.date)}
								</div>
								<div className="wa-table-columns-wrapper">
									{item.data.map((hourWeather: any) => {
										return (
											<div className="wa-column wa-img-wrapper">
												<img
													src={`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@4x.png`}
													alt={
														hourWeather.weather[0]
															.description
													}
												/>
											</div>
										);
									})}
								</div>
								{/* <div className="wa-column wa-column-temp">
									27°C / 32°C
								</div>
								<div className="wa-column">3.9mm</div>
								<div className="wa-column">1m/s</div> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FiveDayForecast;
