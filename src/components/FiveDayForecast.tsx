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

	return (
		<div className="wa-five-day-forecast">
			<span className="wa-title">Five day forecast</span>
			<div className="wa-table">
				<div className="wa-table-header-wrapper">
					<div className="wa-placeholder" />
					<div className="wa-column">Morning</div>
					<div className="wa-column">Afternoon</div>
					<div className="wa-column">Evening</div>
					<div className="wa-column">Night</div>
					<div className="wa-column wa-column-temp">
						Temperature (low/high)
					</div>
					<div className="wa-column">Rain</div>
					<div className="wa-column">Wind</div>
				</div>
				<div className="wa-table-body-wrapper">
					{groupedDataByDate.map((item: any, index: number) => {
						return (
							<div
								key={item.date + index}
								className="wa-table-row-wrapper"
							>
								<div className="wa-column wa-column-today">
									{item.date}
								</div>
								<div className="wa-column wa-img-wrapper">
									<img
										src={`https://openweathermap.org/img/wn/${item.data[0].weather[0].icon}@4x.png`}
										alt={
											item.data[0].weather[0].description
										}
									/>
								</div>
								<div className="wa-column wa-img-wrapper">
									<img
										src={`https://openweathermap.org/img/wn/${item.data[1].weather[0].icon}@4x.png`}
										alt={
											item.data[1].weather[0].description
										}
									/>
								</div>
								<div className="wa-column wa-img-wrapper">
									<img
										src={`https://openweathermap.org/img/wn/${item.data[1].weather[0].icon}@4x.png`}
										alt={
											item.data[1].weather[0].description
										}
									/>
								</div>
								<div className="wa-column wa-img-wrapper">
									<img
										src={`https://openweathermap.org/img/wn/${item.data[1].weather[0].icon}@4x.png`}
										alt={
											item.data[1].weather[0].description
										}
									/>
								</div>
								<div className="wa-column wa-column-temp">
									27°C / 32°C
								</div>
								<div className="wa-column">3.9mm</div>
								<div className="wa-column">1m/s</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FiveDayForecast;
