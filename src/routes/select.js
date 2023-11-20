import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import MovieDetails from "../component/movie-details/movie-details.component";

const Select = () => {
	const [selectedMovie, setSelectedMovie] = useState({});
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

	return (
		<>
			<MovieDetails
				id={selectedMovie.id}
				imageUrl={selectedMovie.poster_path}
				movieName={selectedMovie.title}
				releaseDate={selectedMovie.release_date}
				rating={selectedMovie.vote_average}
				duration={selectedMovie.runtime}
				description={selectedMovie.overview}
			/>
			<Outlet />
		</>
	);
};

export default Select;
