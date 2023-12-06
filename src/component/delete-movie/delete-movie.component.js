import "./delete-movie.style.scss";

import { useState } from "react";

import Dialog from "../dialog/dialog.component";
import { Link } from "react-router-dom";
import ButtonLink from "../button-link/button-link.component";

const DeleteMovie = ({ movieId }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleDeleteMovie = () => {
		console.log("Deleting Movie...");
		setDialogOpen(false);
	};

	const openDialog = () => {
		console.log("Delete button dialog open");
		setDialogOpen(true);
	};

	const closeDialog = () => {
		console.log("Delete button dialog close");
		setDialogOpen(false);
	};

	return (
		<div
			className="delete-movie-container"
			data-testid="delete-movie-container"
		>
			<ButtonLink
				className="delete-movie-button"
				data-testid="delete-movie-button"
				to={{ pathname: `/${movieId}/delete` }}
				onClick={openDialog}
			>
				DELETE MOVIE
			</ButtonLink>
			{dialogOpen && (
				<Dialog
					title={"DELETE MOVIE"}
					handleCloseButton={closeDialog}
				>
					<p data-testid="delete-movie-confirm-text">
						<em>
							<b>Are you sure you want to delete this movie?</b>
						</em>
					</p>
					<ButtonLink
						className="delete-movie-confirm-button"
						data-testid="delete-movie-confirm-button"
						to={{ pathname: "/" }}
						onClick={handleDeleteMovie}
					>
						Confirm
					</ButtonLink>
				</Dialog>
			)}
		</div>
	);
};

export default DeleteMovie;
