import "./addMovie.scss";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import Dialog from "../../component/dialog/dialog.component";
import MovieForm from "../../component/movie-form/movie-form.component";

const AddMovie = () => {
	const [openDialog, setDialogOpen] = useState(true);

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
					title={"ADD MOVIE"}
					handleCloseButton={closeDialog}
				>
					<MovieForm onSubmit={handleMovieSubmit}></MovieForm>
				</Dialog>
			)}
		</>
	);
};

export default AddMovie;
