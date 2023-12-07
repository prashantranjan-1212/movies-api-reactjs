import { Link, useSearchParams } from "react-router-dom";

import "./movie-details.style.scss";
import PropTypes from "prop-types";

const MovieDetails = ({
	imageUrl,
	movieName,
	releaseDate,
	rating,
	duration,
	description,
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
					<b>Release Date: </b>
					{releaseDate}
				</p>
				<p>
					<b>Rating: </b>
					{rating}
				</p>
				<p>
					<b>Duration: </b>
					{duration}
				</p>
				<p>
					<b>Description: </b>
					{description}
				</p>
				<Link
					className="movie-info-link"
					to={{
						pathname: "/",
						search: `?${searchParams}`,
					}}
				>
					CLOSE
				</Link>
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
