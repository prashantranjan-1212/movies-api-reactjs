import { Link, useSearchParams } from "react-router-dom";
import "./movie-tile.style.scss";
import PropTypes from "prop-types";

const MovieTile = ({
	movieId,
	imageUrl,
	movieName,
	releaseDate,
	genres,
	scrollUp,
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const removeNullQueryValue = () => {
		const array = [];
		const queryParam = new URLSearchParams(searchParams);

		for (const name of queryParam.keys()) {
			const value = queryParam.get(name);
			if (value === "" || value === null) {
				array.push(name);
			}
		}

		array.forEach((val) => {
			queryParam.delete(val);
		});

		setSearchParams(queryParam);
	};

	return (
		<div className="movie-tile-poster">
			<img
				src={imageUrl}
				alt={movieName}
			/>
			<div className="movie-tile-info">
				<h2>{movieName}</h2>
				<p>
					<b>Release Year: </b> {releaseDate}
				</p>
				<p>
					<b>Genres: </b>
					{genres.join(", ")}
				</p>
				<Link
					className="movie-tile-view-details-link"
					to={{
						pathname: `/${movieId}`,
						search: `?${searchParams}`,
					}}
					onClick={scrollUp}
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default MovieTile;

MovieTile.propTypes = {
	movieId: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
};
