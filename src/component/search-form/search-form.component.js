import PropTypes from "prop-types";
import "./search-form.style.scss";
import { useState } from "react";

const SearchForm = ({ searchValue, searchHandler }) => {
	const [searchedValue, setSearchedValue] = useState(searchValue);

	return (
		<div className="search-form">
			<input
				data-testid="search-input"
				className="search-box"
				type="search"
				placeholder={"What do you want to watch?"}
				onSelect={(event) => setSearchedValue(event.target.value)}
			></input>
			<button
				data-testid="search-button"
				className="search-button"
				onClick={() => searchHandler(searchedValue)}
			>
				SEARCH
			</button>
		</div>
	);
};

export default SearchForm;

SearchForm.propTypes = {
	searchValue: PropTypes.string.isRequired,
	searchHandler: PropTypes.func.isRequired,
};
