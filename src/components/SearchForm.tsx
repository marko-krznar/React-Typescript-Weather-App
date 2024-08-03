import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

function SearchForm() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleClearSearchTerm = () => {
		setSearchTerm("");
	};

	const handleSearch = () => {
		console.log("Search this", searchTerm);
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
				<button onClick={handleClearSearchTerm}>
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
