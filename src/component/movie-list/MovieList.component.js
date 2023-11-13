import { useEffect } from "react";
import { useState } from "react";
import "./MovieList.style.scss";
import SearchForm from "../search-form/search-form.component";
import GenreSelect from "../genre-select/genre-select.component";
import SortControl from "../sort-control/sort-control.component";
import MovieTile from "../movie-tile/movie-tile.component";
import MovieDetails from "../movie-details/movie-details.component";

const MovieList = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortCriterion, setSortCriterion] = useState("");
	const [activeGenre, setActiveGenre] = useState("");
	const [movieList, setMovieList] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [renderMovieDetailpage, setRenderMovieDetailpage] = useState(false);

	const genres = ["DOCUMENTRY", "COMEDY", "HORROR", "CRIME"];

	useEffect(() => {
		fetch("http://localhost:4000/movies")
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				console.log(data.data);
				setMovieList(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const searchHandler = (value) => {
		setSearchQuery(value);
	};

	const genreSelectHandler = (genre) => {
		setActiveGenre(genre);
	};

	const onSortHandler = (value) => {
		if (value === "RELEASE DATE") {
			console.log("Sort By Release Date");
			sortByReleaseDate();
		} else if (value === "TITLE") {
			console.log("Sort By Title");
			sortByTitle();
		}
	};

	const sortByReleaseDate = () => {
		console.log("sortByReleaseDate function called");
		const sortedMovieListByReleaseDate = movieList.sort((a, b) => {
			if (a.release_date < b.release_date) {
				return -1;
			}
			if (a.release_date < b.release_date) {
				return 1;
			}
			return 0;
		});
		setMovieList(sortedMovieListByReleaseDate);
	};

	const sortByTitle = () => {
		console.log("sortByTitle function called");
		const sortedMovieListByTitle = movieList.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title < b.title) {
				return 1;
			}
			return 0;
		});
		setMovieList(sortedMovieListByTitle);
	};

	const handleMovieClick = (value) => {
		movieList.forEach((movie) => {
			if (movie.title === value) {
				setSelectedMovie(movie);
				setRenderMovieDetailpage(true);
			}
		});
	};

	const closeMovieDetail = () => {
		setRenderMovieDetailpage(false);
	};

	return (
		<>
			<h1 className="movie-list-heading">Movie List Page</h1>
			<SearchForm
				searchValue={searchQuery}
				searchHandler={(value) => searchHandler(value)}
			/>
			<div>
				<GenreSelect
					genres={genres}
					selectedGenre={activeGenre}
					onSelect={genreSelectHandler}
				/>
				<SortControl
					releaseDate={"RELEASE DATE"}
					title={"TITLE"}
					onSortControl={onSortHandler}
				/>
			</div>
			{renderMovieDetailpage && (
				<MovieDetails
					imageUrl={selectedMovie.poster_path}
					movieName={selectedMovie.title}
					releaseDate={selectedMovie.release_date}
					rating={selectedMovie.vote_average}
					duration={selectedMovie.runtime}
					description={selectedMovie.overview}
					closeMovieDetail={closeMovieDetail}
				/>
			)}
			<div className="movie-tile-conatiner">
				{movieList.map((movie) => {
					return (
						<MovieTile
							key={movie.id}
							imageUrl={movie.poster_path}
							movieName={movie.title}
							releaseDate={movie.release_date}
							genres={movie.genres}
							onMovieClick={handleMovieClick}
						/>
					);
				})}
			</div>
		</>
	);
};

export default MovieList;
