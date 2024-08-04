import WeatherHighlights from "../components/WeatherHighlights";

function Cards() {
	return (
		<div className="wa-container wa-highlights-container">
			<div className="wa-app-info">
				<h1 className="wa-title">
					Welcome to the Weather App test project!
				</h1>
				<p className="wa-text">
					This application utilizes the OpenWeather API to fetch and
					display real-time weather data for any city.
				</p>
				<p className="wa-text">
					Simply enter a city name to see the current temperature,
					humidity, and weather conditions.
				</p>
				<p className="wa-text">
					The app is built with React and TypeScript, ensuring a
					robust and responsive user experience.
				</p>
			</div>
			<WeatherHighlights />
		</div>
	);
}

export default Cards;
