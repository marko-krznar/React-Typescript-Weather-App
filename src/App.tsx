import React, { useState, useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import { InputCity } from "./components/InputCity";

import { BsEmojiFrown } from "react-icons/bs";

import "./App.css";
import { apiKey } from "./api/hookAxios";

const App = () => {
	const [state, setState] = useState("Zagreb");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [cityInfo, setCityInfo] = useState<any>({});

	const isEmpty = Object.keys(cityInfo).length === 0;

	const axios = require("axios");

	const fetchCityData = () => {
		axios
			.get(
				`https://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=1&units=metric&appid=${apiKey}`
			)

			.then((response: any) => {
				if (response.data !== null && response.data !== undefined) {
					setCityInfo(response.data[0]);
				}
			})

			.catch((err: any) => {
				setError(err.message);
			})

			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchCityData();
	}, [error]);

	const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		fetchCityData();

		setState("");

		setCityInfo({});
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	const handleClear = () => {
		setState("");
	};

	return (
		<div className="App relative md:p-8 md:flex md:items-center md:justify-center md:min-h-screen">
			<div className="absolute bottom-2 text-white/25 text-center w-full text-xs">
				Photo by{" "}
				<a
					className="text-white/50 hover:text-white"
					href="https://unsplash.com/@photogolic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>
					Anatoliy Shostak
				</a>{" "}
				on{" "}
				<a
					className="text-white/50 hover:text-white"
					href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>
					Unsplash
				</a>
			</div>
			<div className="flex flex-col max-w-[60rem] md:max-h-[45rem] mx-auto md:flex-row md:flex-1">
				<div className="bg-[rgba(9,9,9,0.8)] grow-[1] p-8 flex flex-col">
					<h2 className="text-white font-bold mb-4 text-2xl">
						Search Weather by City
					</h2>
					<InputCity
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleClear={handleClear}
						state={state}
						cityInfo={cityInfo}
					/>
					{isEmpty === false && loading === false && (
						<>
							<CurrentWeather cityInfo={cityInfo} />
						</>
					)}
				</div>
				{loading === true && (
					<div className="text-center my-4">
						<div role="status">
							<svg
								className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				)}
				{error && isEmpty && loading === false && (
					<div className="text-center my-4 px-8 py-4 mx-auto mb-12 mt-12 bg-white/[.2] rounded-lg shadow-md backdrop-blur-lg text-white">
						<BsEmojiFrown className="text-6xl mb-6 mx-auto" />
						<p className="text-3xl mb-2">
							Aaaaaaaah! Something went wrong
						</p>
						<p>{error}</p>
					</div>
				)}
				{isEmpty === false && loading === false && (
					<ForecastWeather cityInfo={cityInfo} />
				)}
			</div>
		</div>
	);
};

export default App;
