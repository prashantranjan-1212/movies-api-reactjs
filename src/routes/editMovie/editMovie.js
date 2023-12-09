import "./editMovie.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieForm from "../../component/movie-form/movie-form.component";
import Dialog from "../../component/dialog/dialog.component";

const EditMovie = () => {
	const [selectedMovie, setSelectedMovie] = useState({});
	const [formData, setFormData] = useState({});
	const [openDialog, setDialogOpen] = useState(true);
	const { movieId } = useParams();

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
		body: JSON.stringify(formData),
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

	useEffect(() => {
		const url = `http://localhost:4000/movies`;
		console.log(url);
		fetch(url, requestOptions)
			.then((response) => {
				if (!response.ok) {
					console.log(response.json);
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				console(`Fetched Data: ${data}`);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [formData]);

	const handleMovieSubmit = (data) => {
		console.log(data);
		setFormData(data);
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
