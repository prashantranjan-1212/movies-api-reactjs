import "./add-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";
import PropTypes from "prop-types";

const AddMovie = () => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleMovieSubmit = (data) => {
		console.log(data);
		setDialogOpen(false);
	};

	return (
		<div
			className="add-movie-container"
			data-testid="add-movie-container"
		>
			<button
				className="add-movie-button"
				data-testid="add-movie-button"
				onClick={() => setDialogOpen(true)}
			>
				ADD MOVIE
			</button>
			{dialogOpen && (
				<Dialog
					title={"ADD MOVIE"}
					handleCloseButton={() => setDialogOpen(false)}
				>
					<MovieForm onSubmit={handleMovieSubmit}></MovieForm>
				</Dialog>
			)}
		</div>
	);
};

export default AddMovie;
