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
				console("Fetched Data: ", data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [formData]);

	const handleMovieSubmit = (data) => {
		console.log("Form Data: ", data);
		const formattedDate = formatDate(data);
		const rating = data.vote_average;
		const runtime = data.runtime;
		data.vote_average = Number(rating);
		data.runtime = Number(runtime);
		data.release_date = formattedDate;
		console.log("Formatted Date: ", data);
		setFormData(data);
		setDialogOpen(false);
	};

	const formatDate = (data) => {
		const date = data.release_date;
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const formattedMonth = month < 10 ? `0${month}` : `${month}`;
		const formattedDay = day < 10 ? `0${day}` : `${day}`;
		const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
		return formattedDate;
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
