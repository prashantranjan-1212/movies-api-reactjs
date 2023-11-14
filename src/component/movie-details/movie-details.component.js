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
				<p>
					<b>RELEASE YEAR : </b>
					{releaseDate}
				</p>
				<p>
					<b>RATING : </b>
					{rating}
				</p>
				<p>
					<b>DURATION : </b>
					{duration}
				</p>
				<p>
					<b>DESCRIPTION : </b>
					{description}
				</p>
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
