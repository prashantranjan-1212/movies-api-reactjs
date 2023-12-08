import "./delete-movie.style.scss";

import { Link } from "react-router-dom";

const DeleteMovie = ({ movieId }) => {
	return (
		<>
			<Link
				className="delete-movie-button"
				data-testid="delete-movie-button"
				to={{ pathname: `/${movieId}/delete` }}
			>
				DELETE MOVIE
			</Link>
		</>
	);
};

export default DeleteMovie;
