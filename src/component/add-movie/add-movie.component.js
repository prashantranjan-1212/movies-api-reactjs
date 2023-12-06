import "./add-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ButtonLink from "../button-link/button-link.component";

const AddMovie = () => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleMovieSubmit = (data) => {
		console.log(data);
		setDialogOpen(false);
	};

	const openDialog = () => {
		console.log("Add button dialog open");
		setDialogOpen(true);
	};

	const closeDialog = () => {
		console.log("Add button dialog close");
		setDialogOpen(false);
	};

	return (
		<div
			className="add-movie-container"
			data-testid="add-movie-container"
		>
			<ButtonLink
				className="add-movie-button"
				data-testid="add-movie-button"
				to={{ pathname: "/new" }}
				onClick={openDialog}
			>
				ADD MOVIE
			</ButtonLink>
			{dialogOpen && (
				<Dialog
					title={"ADD MOVIE"}
					handleCloseButton={closeDialog}
				>
					<MovieForm onSubmit={handleMovieSubmit}></MovieForm>
				</Dialog>
			)}
		</div>
	);
};

export default AddMovie;
