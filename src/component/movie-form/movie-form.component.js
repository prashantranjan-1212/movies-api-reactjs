import "./movie-form.style.scss";

import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const MovieForm = ({ movieInfo, onSubmit }) => {
	const [register, handleSubmit] = useForm();
	const [data, setData] = useState("");

	const [title, setTitle] = useState(movieInfo.title || "");
	const [releaseDate, setReleaseDate] = useState(movieInfo.releaseDate || "");
	const [movieUrl, setMovieUrl] = useState(movieInfo.movieUrl || "");
	const [rating, setRating] = useState(movieInfo.rating || "");
	const [genre, setGenre] = useState(movieInfo.genre || "");
	const [runtime, setRuntime] = useState(movieInfo.runtime || "");
	const [overview, setOverview] = useState(movieInfo.overview || "");

	const handleMovieSubmit = (event) => {
		event.preventDefault();
		console.log("Data Submitted");
		const formData = Object.fromEntries(new FormData(event.target));
		onSubmit(formData);
	};

	return (
		<div
			className="movie-form-container"
			data-testid="movie-form-container"
		>
			<form
				onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
			>
				<label data-testid="title-label">TITLE</label>
				<input
					data-testid="title-input"
					type="text"
					name="title"
					placeholder="Movie Title "
					{...register("title", {
						required: true,
						onChange: (event) => setTitle(event.target.value),
					})}
				></input>
				<label data-testid="release-date-label">RELEASE DATE</label>
				<input
					data-testid="release-date-input"
					type="date"
					name="releaseDate"
					{...register("releaseDate", {
						required: true,
						valueAsDate: true,
						onChange: (event) => setReleaseDate(event.target.value),
					})}
				></input>
				<label data-testid="movie-url-label">MOVIE URL</label>
				<input
					data-testid="movie-url-input"
					type="url"
					name="movieUrl"
					{...register("movieUrl", {
						required: true,
						onChange: (event) => setMovieUrl(event.target.value),
					})}
				></input>
				<label data-testid="rating-label">RATING</label>
				<input
					data-testid="rating-input"
					type="number"
					name="rating"
					min="0"
					max="10"
					{...register("rating", {
						required: true,
						onChange: (event) => setRating(event.target.value),
					})}
				></input>
				<label data-testid="genre-label">GENRE</label>
				<select
					data-testid="genre-select"
					name="genre"
					{...register("genre", {
						required: true,
						onChange: (event) => setGenre(event.target.value),
					})}
				>
					<option value="Comedy">Comedy</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Thriller">Thriller</option>
					<option value="Action">Action</option>
					<option value="Documentary">Documentary</option>
					<option value="Adventure">Adventure</option>
					<option value="Sci-Fi">Sci-Fi</option>
				</select>
				<label data-testid="runtime-label">RUNTIME</label>
				<input
					data-testid="runtime-input"
					type="text"
					name="runtime"
					{...register("runtime", {
						required: true,
						onChange: (event) => setRuntime(event.target.value),
					})}
				></input>
				<label data-testid="overview-label">OVERVIEW</label>
				<textarea
					data-testid="overview-textarea"
					name="overview"
					{...register("overview", {
						required: true,
						onChange: (event) => setOverview(event.target.value),
					})}
				/>
				<Link
					className="form-submit"
					type="submit"
					value="Submit"
					data-testid="movie-form-submit"
					to={{ pathname: "/" }}
				>
					SUBMIT
				</Link>
			</form>
		</div>
	);
};

export default MovieForm;

MovieForm.propTypes = {
	movieInfo: PropTypes.object,
	onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
	movieInfo: {},
	onSubmit: () => {},
};
