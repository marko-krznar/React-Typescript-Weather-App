import React from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

function HourlyWeatherSection() {
	return (
		<>
			<div className="flex items-center justify-center gap-8">
				<div className="h-px bg-blue-200 flex-1" />
				<span className="text-2xl font-bold">21.03.2024.</span>
				<div className="h-px bg-blue-200 flex-1" />
			</div>
			<div className="flex gap-4">
				<HourlyWeatherItem />
				<HourlyWeatherItem />
				<HourlyWeatherItem />
				<HourlyWeatherItem />
				<HourlyWeatherItem />
				<HourlyWeatherItem />
			</div>
		</>
	);
}

export default HourlyWeatherSection;
