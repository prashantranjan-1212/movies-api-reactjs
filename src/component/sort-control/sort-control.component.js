import "./sort-control.style.css";

const SortControl = ({ releaseDate, title, onSortControl }) => {
  return (
    <div>
      <label>Sort By : </label>
      <select onChange={onSortControl}>
        <option value={releaseDate}>Release Date</option>
        <option value={title}>Title</option>
      </select>
    </div>
  );
};

export default SortControl;
