import "./sort-control.style.css";
import PropTypes from "prop-types";

const SortControl = ({ releaseDate, title, onSortControl }) => {
  return (
    <div>
      <label>Sort By : </label>
      <select onChange={(event) => onSortControl(event.target.value)}>
        <option value={title}>Title</option>
        <option value={releaseDate}>Release Date</option>
      </select>
    </div>
  );
};

export default SortControl;

SortControl.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  onSortControl: PropTypes.func,
};

SortControl.defaultProps = {
  title: "Pathan",
  releaseDate: "",
  onSortControl: () => {},
};
