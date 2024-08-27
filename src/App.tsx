import WeatherContainer from "./containers/WeatherContainer";
import SearchContainer from "./containers/SearchContainer";
import "./scss/style.scss";

function App() {
	return (
		<div className="wa-app-wrapper">
			<div className="wa-app-container">
				<SearchContainer />
				<WeatherContainer />
			</div>
		</div>
	);
}

export default App;
