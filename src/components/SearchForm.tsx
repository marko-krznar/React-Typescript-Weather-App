import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

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

	const handleClearSearchTerm = () => {
		setSearchTerm("");
	};

	const handleSearch = () => {
		dispatch(fetchWeatherByCity(searchTerm));
		dispatch(fetchFiveDayForecastByCity(searchTerm));
	};

	return (
		<div className="wa-search-form-wrapper">
			<div className="wa-input-wrapper">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input
					type="text"
					placeholder="Search for place..."
					value={searchTerm}
					onChange={handleSearchTerm}
				/>
				<button aria-label="xmark" onClick={handleClearSearchTerm}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</div>
			<button className="wa-button" onClick={handleSearch}>
				Find
			</button>
		</div>
	);
}

export default SearchForm;
