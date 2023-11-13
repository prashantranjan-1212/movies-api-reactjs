import PropTypes from "prop-types";
import "./search-form.style.scss";
import { useState } from "react";

const SearchForm = ({ searchValue, searchHandler }) => {
	const [select, setSelect] = useState(searchValue);

	const selectHandler = (event) => {
		const value = event.target.value;
		setSelect(value);
	};

	return (
		<div className="search-form">
			<input
				data-testid="search-input"
				className="search-box"
				type="search"
				placeholder={"What do you want to watch?"}
				onSelect={(event) => selectHandler(event)}
			></input>
			<button
				data-testid="search-button"
				className="search-button"
				onClick={() => searchHandler(select)}
			>
				Search
			</button>
		</div>
	);
};

export default SearchForm;

SearchForm.propTypes = {
	searchValue: PropTypes.string.isRequired,
	searchHandler: PropTypes.func.isRequired,
};
