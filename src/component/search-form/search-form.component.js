import PropTypes from "prop-types";
import "./search-form.style.css";

const SearchForm = ({ searchValue }) => {
  return (
    <>
      <div>
        <input
          data-testid="search-input"
          className="search-box"
          type="search"
          placeholder={searchValue}
          onSelect={(event) => {
            const inputValue = event.target.value;
            this.setState(
              () => {
                return {
                  searchValue: inputValue,
                };
              },
              () => {
                console.log(searchValue);
              }
            );
          }}
        ></input>
      </div>
      <div>
        <button
          data-testid="search-button"
          className="search-button"
          onClick={(event) => {
            window.alert(searchValue);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

SearchForm.defaultProps = {
  searchValue: "Pathan",
};
