import "./sort-control.style.css";
import PropTypes from "prop-types";

const SortControl = ({ releaseDate, title, onSortControl }) => {
  return (
    <div>
      <label>Sort By : </label>
      <select onChange={onSortControl}>
        <option value={releaseDate.toLocaleDateString()}>Release Date</option>
        <option value={title}>Title</option>
      </select>
    </div>
  );
};

export default SortControl;

SortControl.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired,
  onSortControl: PropTypes.func,
};

SortControl.defaultProps = {
  title: "Pathan",
  releaseDate: new Date(2023, 1, 26),
  onSortControl: () => {},
};
