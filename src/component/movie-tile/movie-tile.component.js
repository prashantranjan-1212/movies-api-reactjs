import "./movie-tile.style.scss";
import PropTypes from "prop-types";

const MovieTile = ({
	imageUrl,
	movieName,
	releaseDate,
	genres,
	onMovieClick,
}) => {
	return (
		<div className="movie-tile-poster">
			<img
				src={imageUrl}
				alt={movieName}
			/>
			<div className="movie-tile-info">
				<h2>{movieName}</h2>
				<p>
					<b>Release Year : </b> {releaseDate}
				</p>
				<p>
					<b>genres: </b>genres: {genres.join(", ")}
				</p>
				<button
					className="movie-tile-view-details-button"
					onClick={() => onMovieClick(movieName)}
				>
					VIEW DETAIL
				</button>
			</div>
		</div>
	);
};

export default MovieTile;

MovieTile.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	onMovieClick: PropTypes.func.isRequired,
};
