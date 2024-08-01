import Search from "./components/Search";
import "./scss/style.scss";

const currentWeather = {
	coord: {
		lon: 15.9772,
		lat: 45.8132,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01n",
		},
	],
	base: "stations",
	main: {
		temp: 297.78,
		feels_like: 298,
		temp_min: 295.27,
		temp_max: 297.97,
		pressure: 1009,
		humidity: 65,
		sea_level: 1009,
		grnd_level: 991,
	},
	visibility: 10000,
	wind: {
		speed: 4.12,
		deg: 300,
	},
	clouds: {
		all: 0,
	},
	dt: 1722543469,
	sys: {
		type: 1,
		id: 6389,
		country: "HR",
		sunrise: 1722483557,
		sunset: 1722536723,
	},
	timezone: 7200,
	id: 3186886,
	name: "Zagreb",
	cod: 200,
};

function App() {
	console.log(currentWeather);

	return (
		<div className="wa-wrapper">
			<div className="wa-container">
				<Search />
				<div className="wa-weather-info-wrapper">cards</div>
			</div>
		</div>
	);
}

export default App;
