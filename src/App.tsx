import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import { InputCity } from "./components/InputCity";

import { apiKey } from "./api/hookAxios";

const App = () => {
	const [state, setState] = useState("");

	const [cityInfo, setCityInfo] = useState<any>({});

	const isEmpty = Object.keys(cityInfo).length === 0;

	const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const axios = require("axios");

		const fetchCity = () => {
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
					console.log(err);
				});
		};

		fetchCity();

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
		<div className="App px-4">
			<h2 className="text-white text-5xl text-center font-bold my-8">
				Weather by city
			</h2>
			<InputCity
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				handleClear={handleClear}
				state={state}
				cityInfo={cityInfo}
			/>
			{isEmpty === false ? (
				<>
					<CurrentWeather cityInfo={cityInfo} />
					<ForecastWeather cityInfo={cityInfo} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default App;
