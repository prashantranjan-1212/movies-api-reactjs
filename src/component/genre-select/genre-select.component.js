import "./genre-select.style.css";
import PropTypes from "prop-types";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  return (
    <>
      {genres.map((genre, index) => {
        return (
          <button
            key={index}
            data-testid={genre}
            onClick={() => onSelect(genre)}
            style={{
              backgroundColor: genre === selectedGenre ? "DodgerBlue" : "white",
            }}
            className="genre-selected-button"
          >
            {genre}
          </button>
        );
      })}
    </>
  );
};

export default GenreSelect;

GenreSelect.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

GenreSelect.defaultProps = {
  genres: ["Comedy", "Horr"],
  selectedGenre: "Comedy",
  onSelect: () => {},
};
