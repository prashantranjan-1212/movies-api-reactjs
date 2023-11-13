import "./movie-details.style.scss";
import PropTypes from "prop-types";

const MovieDetails = ({
	imageUrl,
	movieName,
	releaseDate,
	rating,
	duration,
	description,
	closeMovieDetail,
}) => {
	return (
		<div className="movie-details">
			<div className="movie-poster">
				<img
					src={imageUrl}
					alt={movieName}
				/>
			</div>
			<div className="movie-info">
				<h2>{movieName}</h2>
				<p>Release Year : {releaseDate}</p>
				<p>Rating : {rating}</p>
				<p>Duartion : {duration}</p>
				<p>Description : {description}</p>
				<button
					className="movie-info-button"
					onClick={closeMovieDetail}
				>
					CLOSE
				</button>
			</div>
		</div>
	);
};

export default MovieDetails;

MovieDetails.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
};
