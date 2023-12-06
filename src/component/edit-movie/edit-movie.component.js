import "./edit-movie.style.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";
import ButtonLink from "../button-link/button-link.component";

const EditMovie = ({ movieId }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleMovieSubmit = (data) => {
		console.log(data);
		setDialogOpen(false);
	};

	const openDialog = () => {
		console.log("Edit button dialog open");
		setDialogOpen(true);
	};

	const closeDialog = () => {
		console.log("Edit button dialog close");
		setDialogOpen(false);
	};

	return (
		<div
			className="edit-movie-container"
			data-testid="edit-movie-container"
		>
			<ButtonLink
				className="edit-movie-button"
				data-testid="edit-movie-button"
				to={{ pathname: `/${movieId}/edit` }}
				onClick={openDialog}
			>
				EDIT MOVIE
			</ButtonLink>
			{dialogOpen && (
				<Dialog
					title={"EDIT MOVIE"}
					handleCloseButton={closeDialog}
				>
					<MovieForm onSubmit={handleMovieSubmit}></MovieForm>
				</Dialog>
			)}
		</div>
	);
};

export default EditMovie;
