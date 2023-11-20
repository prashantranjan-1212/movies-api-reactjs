import { useEffect } from "react";
import { useState } from "react";
import "./MovieList.style.scss";
import SearchForm from "../search-form/search-form.component";
import GenreSelect from "../genre-select/genre-select.component";
import SortControl from "../sort-control/sort-control.component";
import MovieTile from "../movie-tile/movie-tile.component";
import MovieDetails from "../movie-details/movie-details.component";
import { useLocation, useSearchParams } from "react-router-dom";

const MovieList = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortCriterion, setSortCriterion] = useState("");
	const [activeGenre, setActiveGenre] = useState("");

	const [searchParams, setSearchParams] = useSearchParams();
	//const [query] = useLocation();

	const [movieList, setMovieList] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [renderMovieDetailpage, setRenderMovieDetailpage] = useState(false);

	const genres = ["action", "adventure", "comedy", "crime", "family"];

	const movieSearched = searchParams.get("query");
	const genre = searchParams.get("genre");
	const sortBy = searchParams.get("sortBy");

	//const prevousMovieSearched = query.get("query");
	//const previousGenre = query.get("genre");
	//const previousSortBy = query.get("sortBy");

	useEffect(() => {
		fetch(`http://localhost:4000/movies`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setMovieList(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		fetch(
			`http://localhost:4000/movies?searchBy=title&search=${searchQuery}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setMovieList(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [searchQuery]);

	useEffect(() => {
		fetch(
			`http://localhost:4000/movies?searchBy=genres&filter=${activeGenre}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setMovieList(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [activeGenre]);

	useEffect(() => {
		fetch(
			`http://localhost:4000/movies?sortOrder=asc&sortBy=${sortCriterion}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setMovieList(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [sortCriterion]);

	const sortHandler = (value) => {
		setSortCriterion(value);
		setSearchParams({ sortBy: value });
	};

	const genreHandler = (value) => {
		console.log(value);
		setActiveGenre(value);
		setSearchParams({ genre: value });
	};

	const movieSearchHandler = (value) => {
		setSearchQuery(value);
		setSearchParams({ query: value });
	};

	const movieSelectHandler = (value) => {
		movieList.forEach((movie) => {
			if (movie.title === value) {
				setSelectedMovie(movie);
				setRenderMovieDetailpage(true);
			}
		});
		window.scrollTo({ top: 130, left: 0, behavior: "auto" });
	};

	const closeMovieDetail = () => {
		setRenderMovieDetailpage(false);
	};

	return (
		<>
			<h1 className="movie-list-heading">MOVIE LIST PAGE</h1>
			{renderMovieDetailpage ? (
				<MovieDetails
					imageUrl={selectedMovie.poster_path}
					movieName={selectedMovie.title}
					releaseDate={selectedMovie.release_date}
					rating={selectedMovie.vote_average}
					duration={selectedMovie.runtime}
					description={selectedMovie.overview}
					closeMovieDetail={closeMovieDetail}
				/>
			) : (
				<SearchForm
					searchValue={searchQuery}
					searchHandler={movieSearchHandler}
				/>
			)}
			<div>
				<GenreSelect
					genres={genres}
					selectedGenre={activeGenre}
					onSelect={genreHandler}
				/>
				<SortControl
					releaseDate={"release_date"}
					title={"title"}
					onSortControl={sortHandler}
				/>
			</div>

			<div className="movie-tile-conatiner">
				{movieList.map((movie) => {
					return (
						<MovieTile
							key={movie.id}
							imageUrl={movie.poster_path}
							movieName={movie.title}
							releaseDate={movie.release_date}
							genres={movie.genres}
							movieSelect={movieSelectHandler}
						/>
					);
				})}
			</div>
		</>
	);
};

export default MovieList;
