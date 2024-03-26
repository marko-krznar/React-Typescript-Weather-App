import React from "react";
import { BsEmojiFrown } from "react-icons/bs";

function HourlyWeatherItem() {
	return (
		<div className="flex flex-col gap-4 rounded-md w-fit bg-custom-blue-1">
			<span className="text-center text-white text-xs font-bold py-1 px-2 rounded-t-md bg-custom-blue-2">
				22:00
			</span>
			<div className="flex flex-col items-center gap-4 p-4 pt-0">
				<BsEmojiFrown />
				<span className="text-xs">Clear Sky</span>
				<span className="text-xl font-bold">13° C</span>
			</div>
		</div>
	);
}

export default HourlyWeatherItem;
