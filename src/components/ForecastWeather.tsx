import React, { useEffect, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { fromUnixTime, format } from "date-fns";

import { apiKey, useAxios } from "../api/hookAxios";
import { RenderIcon } from "../RenderIcon";
import HourlyWeatherSection from "./HourlyWeatherSection";
// import HourlyWeather from "./HourlyWeather";

interface IFiveDayWeatherItem {
	dt_txt: string;
	dt: number;
	main: {
		temp: number;
	};
	weather: [
		{
			main: string;
			description: string;
			icon: string;
		}
	];
}

interface IFiveDayWeatherState {
	list: [];
}

const ForecastWeather = (props: any) => {
	const { cityInfo } = props;

	const { response, loading, error }: any = useAxios({
		method: "GET",
		url: `data/2.5/forecast?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=metric&appid=${apiKey}`,
	});

	const [data, setData] = useState<IFiveDayWeatherState>({ list: [] });

	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);

	// const arrayBySameDate = data?.list.filter((forecast: any) => {
	// 	const removedTime = forecast.dt_txt.split(" ")[0];

	// 	return removedTime === "2024-03-15";
	// });

	// Logic
	// Object to store items grouped by date
	const itemsByDate: { [key: string]: Array<any> } = {};

	// Populate itemsByDate
	data?.list.forEach((item: any) => {
		const splitDateString = item?.dt_txt.split(" ");
		const splitedDateString = splitDateString[0];

		if (!itemsByDate[splitedDateString]) {
			itemsByDate[splitedDateString] = [];
		}

		itemsByDate[splitedDateString].push(item);
	});

	return (
		<div className="overflow-y-scroll text-white relative flex-1 p-6 gap-6 flex flex-col bg-custom-blue-4">
			{/* Date element */}
			<HourlyWeatherSection />
			<HourlyWeatherSection />
			<HourlyWeatherSection />
			<HourlyWeatherSection />
			{/* <div className="scroll-indicator">
				<BsChevronDoubleDown />
			</div> */}
			{loading ? (
				<div role="status" className="animate-pulse">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
					<span className="sr-only">Loading...</span>
				</div>
			) : (
				<>
					{error && (
						<div className="m-auto text-white h-full flex items-center">
							<p className="flex justify-center items-center flex-wrap">
								<span className="text-4xl flex items-center">
									<BsEmojiFrown className="mr-2" /> Oh no!
								</span>
								<span className="block w-full text-center mt-4">
									{error.message}
								</span>
							</p>
						</div>
					)}
					{data && (
						<ul className="flex flex-col p-8 dis hidden">
							{data.list.map(
								(item: IFiveDayWeatherItem, i: number) => {
									return (
										<li
											className="flex-auto border-b pb-6 mb-6 border-[rgba(255,255,255,0.4)] last:pb-0 last:mb-0 last:border-0"
											key={i}
										>
											<span className="capitalize">
												{item.weather[0].description}
											</span>
											<div className="flex justify-between items-center my-2">
												<span className="text-3xl font-bold">
													{Math.round(item.main.temp)}
													° C
												</span>
												<div className="w-[60px] h-[60px] flex justify-center items-center translate-x-[.5rem]">
													{RenderIcon(
														item.weather[0].icon,
														2,
														"text-[2rem]",
														"max-w-[60px]"
													)}
												</div>
											</div>
											<div className="flex justify-between items-center">
												<span className="">
													{format(
														new Date(
															fromUnixTime(
																item.dt
															)
														),
														"dd.MM.yyyy"
													)}
												</span>
												<span className="">
													{format(
														new Date(
															fromUnixTime(
																item.dt
															)
														),
														"HH:mm"
													)}
												</span>
											</div>
										</li>
									);
								}
							)}
						</ul>
					)}
				</>
			)}
		</div>
	);
};

export default ForecastWeather;
