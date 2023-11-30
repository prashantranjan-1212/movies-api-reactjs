import "./sort-control.style.scss";
import PropTypes from "prop-types";

const SortControl = ({ sortBy, releaseDate, title, onSortControl }) => {
	return (
		<>
			<label className="sort-control-label">SORT BY : </label>
			<select
				className="sort-control-option"
				onChange={(event) => onSortControl(event.target.value)}
				defaultValue={sortBy !== null ? sortBy : releaseDate}
			>
				<option value={title}>TITLE</option>
				<option value={releaseDate}>RELEASE DATE</option>
			</select>
		</>
	);
};

export default SortControl;

SortControl.propTypes = {
	sortBy: PropTypes.string,
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	onSortControl: PropTypes.func,
};
