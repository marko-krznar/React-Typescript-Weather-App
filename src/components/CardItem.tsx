import React from "react";

function CardItem() {
	return (
		<div className="wa-card-wrapper">
			<h2 className="heading">Wind</h2>
			<p className="wa-temp">
				{/* {currentWeather.wind.speed} */}
				<span className="wa-temp-sign">km/h</span>
			</p>
		</div>
	);
}

export default CardItem;
