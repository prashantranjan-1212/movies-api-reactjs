import "./edit-movie.style.scss";

import { Link } from "react-router-dom";

const EditMovie = ({ movieId }) => {
	return (
		<>
			<Link
				className="edit-movie-button"
				data-testid="edit-movie-button"
				to={{ pathname: `/${movieId}/edit` }}
			>
				EDIT MOVIE
			</Link>
		</>
	);
};

export default EditMovie;
