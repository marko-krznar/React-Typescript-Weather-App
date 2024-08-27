import SearchForm from "../components/SearchForm";
import Divider from "../components/Divider";
import WeatherInfo from "../components/WeatherInfo";
import WeatherTimeline from "../components/WeatherTimeline";

function Search() {
	return (
		<div className="wa-container wa-search-container">
			<SearchForm />
			<Divider />
			<WeatherInfo />
			<Divider />
			<WeatherTimeline />
		</div>
	);
}

export default Search;
