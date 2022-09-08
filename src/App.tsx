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

	const handleSubmit = (event: any) => {
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

	const handleChange = (event: any) => {
		const trimedTerm = event.target.value.trim();

		setState(trimedTerm);
	};

	const handleClear = () => {
		setState("");
	};

	const defaultCity = {
		country: "HR",
		lat: 45.8131847,
		lon: 15.9771774,
		name: "Zagreb",
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
				<>
					<CurrentWeather cityInfo={defaultCity} />
					<ForecastWeather cityInfo={defaultCity} />
				</>
			)}
		</div>
	);
};

export default App;
