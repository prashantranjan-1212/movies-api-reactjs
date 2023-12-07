import "./editMovie.scss";

import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import MovieForm from "../../component/movie-form/movie-form.component";
import Dialog from "../../component/dialog/dialog.component";

const EditMovie = () => {
	const [selectedMovie, setSelectedMovie] = useState({});
	const [openDialog, setDialogOpen] = useState(true);
	const { movieId } = useParams();

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

	const handleMovieSubmit = (data) => {
		console.log(data);
		setDialogOpen(false);
	};

	const closeDialog = () => {
		console.log("Add button dialog close");
		setDialogOpen(false);
	};

	return (
		<>
			{openDialog && (
				<Dialog
					title={"EDIT MOVIE"}
					handleCloseButton={closeDialog}
				>
					<MovieForm
						movieInfo={selectedMovie}
						onSubmit={handleMovieSubmit}
					></MovieForm>
				</Dialog>
			)}
		</>
	);
};

export default EditMovie;
