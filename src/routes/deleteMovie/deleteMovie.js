import "./delete.scss";

import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import Dialog from "../../component/dialog/dialog.component";

const DeleteMovie = () => {
	const [selectedMovie, setSelectedMovie] = useState({});
	const { movieId } = useParams();
	const [openDialog, setDialogOpen] = useState(true);

	const handleDeleteMovie = () => {
		console.log("Deleting Movie...");
		setDialogOpen(false);
	};

	const closeDialog = () => {
		console.log("Delete button dialog close");
		setDialogOpen(false);
	};

	useEffect(() => {
		const url = `http://localhost:4000/movies/${movieId}`;
		console.log(url);
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setSelectedMovie(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [movieId]);

	return (
		<>
			{console.log(`Delete movie with id --> ${movieId}`)}
			{openDialog && (
				<Dialog
					title={"DELETE MOVIE"}
					handleCloseButton={closeDialog}
				>
					<p data-testid="delete-movie-confirm-text">
						<em>
							<b>Are you sure you want to delete</b>
							<p>
								<b>{selectedMovie.title}</b>
							</p>
						</em>
					</p>
					<Link
						className="delete-movie-confirm-button"
						data-testid="delete-movie-confirm-button"
						onClick={handleDeleteMovie}
						to={{ pathname: "/" }}
					>
						CONFIRM
					</Link>
				</Dialog>
			)}
		</>
	);
};
export default DeleteMovie;
