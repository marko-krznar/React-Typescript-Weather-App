import React, { useEffect, useState } from "react";
import { BsSunset, BsSunrise, BsWind, BsEmojiFrown } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { fromUnixTime, format } from "date-fns";

import { apiKey, useAxios } from "../api/hookAxios";
import { RenderIcon } from "../RenderIcon";

interface ICurrentWeather {
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	sys: {
		sunrise: number;
		sunset: number;
	};
	wind: {
		speed: number;
		deg: number;
	};
}

const CurrentWeather = (props: any) => {
	const { cityInfo } = props;

	const { response, loading, error }: any = useAxios({
		method: "GET",
		url: `data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=metric&appid=${apiKey}`,
	});

	const [data, setData] = useState<ICurrentWeather>({
		weather: [
			{
				id: 0,
				main: "",
				description: "",
				icon: "",
			},
		],
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
		},
		sys: {
			sunrise: 0,
			sunset: 0,
		},
		wind: {
			speed: 0,
			deg: 0,
		},
	});

	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);

	return (
		<div className="text-white flex flex-col flex-1 mt-16">
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
						<div className="text-center my-4">
							<BsEmojiFrown className="text-6xl mb-6 mx-auto" />
							<p className="text-3xl mb-2">
								Aaaaaaaah! Something went wrong
							</p>
							<p>{error.message}</p>
						</div>
					)}
					<>
						{data && (
							<>
								<p>Friday</p>
								<p>January 2022</p>
								<div className="flex flex-col">
									<div className="translate-y-[1.5rem] h-[200px]">
										{RenderIcon(
											data?.weather[0]?.icon,
											4,
											"text-8xl",
											"max-w-full"
										)}
									</div>
									<p className="text-4xl">Scattered Clouds</p>
								</div>
								<div className="flex flex-1 flex-col justify-end">
									<p className="text-7xl font-bold mb-6">
										{Math.round(data.main.temp)}° C
									</p>
									<h2 className="">
										{/* <IoLocationOutline className="mr-2 text-2xl" /> */}
										<span className="">
											{cityInfo.name}, {cityInfo.country}
										</span>
									</h2>
								</div>
								{/* <div className="flex justify-center pb-4 flex-wrap">
									<div className="flex align-center flex-col p-4 grow w-1/2 sm:w-auto sm:max-w-fit md:mx-6">
										<div className="text-center text-2xl">
											<BsSunrise className="inline text-5xl" />
										</div>
										<p className="text-center mt-2 opacity-80">
											{format(
												new Date(
													fromUnixTime(
														data.sys.sunrise
													)
												),
												"HH:mm"
											)}
										</p>
									</div>
									<div className="flex align-center flex-col p-4 grow w-1/2 sm:w-auto sm:max-w-fit md:mx-6">
										<div className="text-center text-2xl">
											<FaTemperatureHigh className="inline text-5xl" />
										</div>
										<p className="text-center mt-2 opacity-80">
											{Math.round(data.main.temp_min)}° C
										</p>
									</div>
									<div className="flex align-center flex-col p-4 grow w-1/2 sm:w-auto sm:max-w-fit md:mx-6">
										<div className="text-center text-2xl">
											<BsWind className="inline text-5xl" />
										</div>
										<p className="text-center mt-2 opacity-80">
											{(data.wind.speed * 3.6).toFixed(2)}{" "}
											km/h
										</p>
									</div>
									<div className="flex align-center flex-col p-4 grow w-1/2 sm:w-auto sm:max-w-fit md:mx-6">
										<div className="text-center text-2xl">
											<FaTemperatureLow className="inline text-5xl" />
										</div>
										<p className="text-center mt-2 opacity-80">
											{Math.round(data.main.temp_max)}° C
										</p>
									</div>
									<div className="flex align-center flex-col p-4 grow w-1/2 sm:w-auto sm:max-w-fit md:mx-6">
										<div className="text-center text-2xl">
											<BsSunset className="inline text-5xl" />
										</div>
										<p className="text-center mt-2 opacity-80">
											{format(
												new Date(
													fromUnixTime(
														data.sys.sunset
													)
												),
												"HH:mm"
											)}
										</p>
									</div>
								</div> */}
							</>
						)}
					</>
				</>
			)}
		</div>
	);
};

export default CurrentWeather;
