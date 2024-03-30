import HourlyWeatherItem from "./HourlyWeatherItem";
import { format } from "date-fns";

function HourlyWeatherSection({ weatherItemByDate, weatherItemsByHour }: any) {
	return (
		<>
			<div className="flex items-center justify-center gap-8">
				<div className="h-px bg-custom-blue-3 flex-1" />
				<span className="text-2xl font-bold">
					{format(new Date(weatherItemByDate), "dd.MM.yyyy")}
				</span>
				<div className="h-px bg-custom-blue-3 flex-1" />
			</div>
			<div className="flex gap-4">
				{weatherItemsByHour.map((weatherItemByHour: any) => {
					return (
						<HourlyWeatherItem
							key={weatherItemByHour.dt}
							weatherItemByHour={weatherItemByHour}
						/>
					);
				})}
			</div>
		</>
	);
}

export default HourlyWeatherSection;
