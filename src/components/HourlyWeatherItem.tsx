import { fromUnixTime, format } from "date-fns";
import { RenderIcon } from "../RenderIcon";

function HourlyWeatherItem({ weatherItemByHour }: any) {
	return (
		<div className="flex flex-col gap-4 rounded-md w-fit bg-custom-blue-1">
			<span className="text-center text-white text-xs font-bold py-1 px-2 rounded-t-md bg-custom-blue-2">
				{format(new Date(fromUnixTime(weatherItemByHour.dt)), "HH:mm")}
			</span>
			<div className="flex flex-col items-center gap-4 p-4 pt-0">
				{RenderIcon(
					weatherItemByHour.weather[0].icon,
					2,
					"text-[2rem]",
					"max-w-[60px]"
				)}
				<span className="text-xs">
					{weatherItemByHour.weather[0].description}
				</span>
				<span className="text-xl font-bold">
					{Math.round(weatherItemByHour.main.temp)}° C
				</span>
			</div>
		</div>
	);
}

export default HourlyWeatherItem;
