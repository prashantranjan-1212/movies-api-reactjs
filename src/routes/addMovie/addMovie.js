import "./addMovie.scss";

import { useEffect, useState } from "react";

import Dialog from "../../component/dialog/dialog.component";
import MovieForm from "../../component/movie-form/movie-form.component";

const AddMovie = () => {
	const [openDialog, setDialogOpen] = useState(true);
	const [formData, setFormData] = useState({});

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
		body: JSON.stringify(formData),
	};

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
				console.log("Fetched Data: ", data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [formData]);

	return (
		<>
			{openDialog && (
				<Dialog
					title={"ADD MOVIE"}
					handleCloseButton={closeDialog}
				>
					<MovieForm submit={handleMovieSubmit}></MovieForm>
				</Dialog>
			)}
		</>
	);
};

export default AddMovie;
