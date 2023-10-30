import "./movie-tile.style.css";
import PropTypes from "prop-types";

const MovieTile = ({
  imageUrl,
  movieName,
  releaseDate,
  genres,
  onMovieClick,
}) => {
  return (
    <div className="movie-tile">
      <img src={imageUrl} alt={movieName} />
      <h2>{movieName}</h2>
      <p>Release Year: {releaseDate.toLocaleDateString()}</p>
      <p>genres: {genres.join(", ")}</p>
      <button onClick={() => onMovieClick(movieName)}>View Details</button>
    </div>
  );
};

export default MovieTile;

MovieTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired,
  genres: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

MovieTile.defaultProps = {
  imageUrl: "https://robohash.org/1?set=set2&size=180x180",
  movieName: "Robo Corb",
  releaseDate: new Date(2010, 2, 24),
  genres: ["Sci-Fi", "Action", "Fantasy"],
  onMovieClick: () => {},
};
