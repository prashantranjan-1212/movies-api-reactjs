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
				value={searchedValue != null ? searchedValue : ""}
				onChange={(event) =>
					setSearchedValue(event.target.value.toLowerCase())
				}
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
	searchValue: PropTypes.string,
	searchHandler: PropTypes.func.isRequired,
};
