import "./movie-details.style.css";
import PropTypes from "prop-types";

const MovieDetails = (
  imageUrl,
  movieName,
  releaseYear,
  rating,
  duration,
  description
) => {
  return (
    <div movie-details>
      <div movie-poster>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div movie-info>
        <h2>{movieName}</h2>
        <p>Release Year : {releaseYear}</p>
        <p>Rating : {rating}</p>
        <p>Duartion : {duration}</p>
        <p>Description : {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  releaseYear: PropTypes.instanceOf(Date).isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

MovieDetails.defaultProps = {
  imageUrl: "https://robohash.org/1?set=set2&size=180x180",
  movieName: "ROBO Corp",
  releaseYear: new Date().toLocaleDateString(),
  rating: 3,
  duration: 120,
  description: "Robo Movie and Fantasy",
};
