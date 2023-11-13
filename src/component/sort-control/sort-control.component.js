import "./sort-control.style.scss";
import PropTypes from "prop-types";

const SortControl = ({ releaseDate, title, onSortControl }) => {
	return (
		<>
			<label className="sort-control-label">SORT BY : </label>
			<select
				className="sort-control-option"
				onChange={(event) => onSortControl(event.target.value)}
				defaultValue={releaseDate}
			>
				<option value={title}>{title}</option>
				<option value={releaseDate}>{releaseDate}</option>
			</select>
		</>
	);
};

export default SortControl;

SortControl.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	onSortControl: PropTypes.func,
};
