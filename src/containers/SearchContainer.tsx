import SearchForm from "../components/SearchForm";
import Divider from "../components/Divider";
import WeatherInfo from "../components/WeatherInfo";
import WeatherTimeline from "../components/WeatherTimeline";

function Search() {
	return (
		<div className="wa-container wa-search-container">
			<form
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<input
					style={{
						flex: "1",
						padding: "12px 40px",
					}}
					type="text"
					placeholder="Search for place..."
				/>
				<button type="submit">Find</button>
			</form>
			<SearchForm />
			<Divider />
			<WeatherInfo />
			<Divider />
			<WeatherTimeline />
		</div>
	);
}

export default Search;
