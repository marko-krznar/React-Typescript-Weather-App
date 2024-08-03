import { currentWeather } from "../App";

function Cards() {
	return (
		<div className="wa-container wa-cards">
			<span className="wa-title">Today's Highlights</span>
			<div className="wa-cards-wrapper">
				<div className="wa-card-wrapper">
					<h2 className="heading">Wind</h2>
					<p className="wa-temp">
						{currentWeather.wind.speed}
						<span className="wa-temp-sign">km/h</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Temperature Max</h2>
					<p className="wa-temp">
						{currentWeather.main.temp_min}
						<span className="wa-temp-sign">°C</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Temperature Min</h2>
					<p className="wa-temp">
						{currentWeather.main.temp_max}
						<span className="wa-temp-sign">°C</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Humidity</h2>
					<p className="wa-temp">
						{currentWeather.main.humidity}
						<span className="wa-temp-sign">%</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Sunrise</h2>
					<p className="wa-temp">
						7:20
						{/* {currentWeather.sys.sunrise} */}
						<span className="wa-temp-sign">h</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Sunset</h2>
					<p className="wa-temp">
						21:34
						{/* {currentWeather.sys.sunset} */}
						<span className="wa-temp-sign">h</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Visibility</h2>
					<p className="wa-temp">
						{currentWeather.visibility}
						<span className="wa-temp-sign">h</span>
					</p>
				</div>
				<div className="wa-card-wrapper">
					<h2 className="heading">Pressure</h2>
					<p className="wa-temp">
						{currentWeather.main.pressure}
						<span className="wa-temp-sign">h</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Cards;
