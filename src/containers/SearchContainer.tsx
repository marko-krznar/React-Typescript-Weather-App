import { useSelector } from "react-redux";
import { RootStore } from "../state/store";

import SearchForm from "../components/SearchForm";
import Divider from "../components/Divider";
import WeatherInfo from "../components/WeatherInfo";
import WeatherTimeline from "../components/WeatherTimeline";

function Search() {
	const fiveDayForecastState = useSelector(
		(state: RootStore) => state.fiveDayForecast
	);

	return (
		<div className="wa-container wa-search-container">
			<SearchForm />
			<Divider />
			<WeatherInfo />
			<Divider />
			{fiveDayForecastState.status === "succeeded" && <WeatherTimeline />}
		</div>
	);
}

export default Search;
