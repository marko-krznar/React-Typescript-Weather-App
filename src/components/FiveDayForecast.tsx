import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../state/store";
import { fetchFiveDayForecastByCity } from "../state/weather/fiveDayForecastSlice";

import TableHeader from "./table/TableHeader";
import TableBody from "./table/TableBody";

interface WeatherDataItemProps {
	dt_txt: string;
}

function FiveDayForecast() {
	const dispatch = useDispatch<AppDispatch>();
	const fiveDayForecastState = useSelector(
		(state: RootStore) => state.fiveDayForecast
	);

	useEffect(() => {
		dispatch(fetchFiveDayForecastByCity("Zagreb"));
	}, [dispatch]);

	const weatherData = fiveDayForecastState.data?.list;

	const uniqueDates = [
		...new Set(
			weatherData.map(
				(weatherDataItem: WeatherDataItemProps) =>
					weatherDataItem.dt_txt.split(" ")[0]
			)
		),
	];

	const groupedDataByDate = uniqueDates.map((date) => ({
		date: date,
		data: weatherData.filter((weatherDataItem: WeatherDataItemProps) =>
			weatherDataItem.dt_txt.includes(date)
		),
	}));

	return (
		<div className="wa-five-day-forecast">
			<span className="wa-title">Five day forecast</span>
			<div className="wa-table">
				<TableHeader />
				<TableBody groupedDataByDate={groupedDataByDate} />
			</div>
		</div>
	);
}

export default FiveDayForecast;
