// import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

function SearchForm() {
	// const [searchTerm, setSearchTerm] = useState("");
	// console.log("searchTerm", searchTerm);

	return (
		<div className="wa-search-form-wrapper">
			<input type="text" placeholder="Search for place..." />
			<button>
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<button>
				<FontAwesomeIcon icon={faMagnifyingGlass} /> Find
			</button>
		</div>
	);
}

export default SearchForm;
