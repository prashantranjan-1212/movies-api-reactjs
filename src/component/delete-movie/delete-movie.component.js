import "./delete-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";

const DeleteMovie = () => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleDeleteMovie = () => {
		console.log("Deleting Movie...");
		setDialogOpen(false);
	};
	return (
		<div
			className="delete-movie-container"
			data-testid="delete-movie-container"
		>
			<button
				className="delete-movie-button"
				data-testid="delete-movie-button"
				onClick={() => setDialogOpen(true)}
			>
				DELETE MOVIE
			</button>
			{dialogOpen && (
				<Dialog
					title={"DELETE MOVIE"}
					handleCloseButton={() => setDialogOpen(false)}
				>
					<p data-testid="delete-movie-confirm-text">
						<em>
							<b>Are you sure you want to delete this movie?</b>
						</em>
					</p>
					<button
						className="delete-movie-confirm-button"
						data-testid="delete-movie-confirm-button"
						onClick={handleDeleteMovie}
					>
						Confirm
					</button>
				</Dialog>
			)}
		</div>
	);
};

export default DeleteMovie;
