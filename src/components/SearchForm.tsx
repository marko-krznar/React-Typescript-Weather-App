import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { fetchWeatherByCity } from "../state/weather/weatherSlice";
import { fetchFiveDayForecastByCity } from "../state/weather/fiveDayForecastSlice";

function SearchForm() {
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleClearSearchTerm = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
		setSearchTerm("");
	};

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(fetchWeatherByCity(searchTerm));
		dispatch(fetchFiveDayForecastByCity(searchTerm));
		setSearchTerm("");
	};

	return (
		<div className="wa-search-form-wrapper">
			<form onSubmit={handleSearch} className="wa-input-wrapper">
				<input
					type="text"
					placeholder="Search for place..."
					value={searchTerm}
					onChange={handleSearchTerm}
				/>
				<button
					type="button"
					onClick={handleClearSearchTerm}
					className="wa-close-button"
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
				<button type="submit" className="wa-button">
					Find
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
