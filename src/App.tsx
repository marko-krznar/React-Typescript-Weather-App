import Cards from "./components/Cards";
import SearchSidebar from "./components/SearchSidebar";
import "./scss/style.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const currentWeather = {
	coord: {
		lon: 15.9772,
		lat: 45.8132,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01d",
		},
	],
	base: "stations",
	main: {
		temp: 27.82,
		feels_like: 28.6,
		temp_min: 27.12,
		temp_max: 27.82,
		pressure: 1007,
		humidity: 54,
		sea_level: 1007,
		grnd_level: 990,
	},
	visibility: 10000,
	wind: {
		speed: 2.57,
		deg: 110,
	},
	clouds: {
		all: 0,
	},
	dt: 1722622454,
	sys: {
		type: 1,
		id: 6389,
		country: "HR",
		sunrise: 1722570029,
		sunset: 1722623045,
	},
	timezone: 7200,
	id: 3337532,
	name: "City of Zagreb",
	cod: 200,
};

function App() {
	console.log(currentWeather);

	return (
		<div className="wa-app-wrapper">
			<div className="wa-app-container">
				<SearchSidebar />
				<Cards />
			</div>
		</div>
	);
}

export default App;
