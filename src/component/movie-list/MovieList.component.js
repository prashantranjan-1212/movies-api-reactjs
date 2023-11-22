import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import SearchForm from "../search-form/search-form.component";
import GenreSelect from "../genre-select/genre-select.component";
import SortControl from "../sort-control/sort-control.component";
import MovieTile from "../movie-tile/movie-tile.component";

const MovieList = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortCriterion, setSortCriterion] = useState("");
	const [activeGenre, setActiveGenre] = useState("");
	const [movieList, setMovieList] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();
	const movieSearched = searchParams.get("query");
	const genre = searchParams.get("genre");
	const sortBy = searchParams.get("sortBy");

	const genres = ["action", "adventure", "comedy", "crime", "family"];

	useEffect(() => {
		const url = `http://localhost:4000/movies`;
		console.log(url);
		fetch(url)
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
		const url = `http://localhost:4000/movies?searchBy=title&search=${searchQuery}`;
		console.log(url);
		fetch(url)
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
		const url = `http://localhost:4000/movies?searchBy=genres&filter=${activeGenre}`;
		console.log(url);
		fetch(url)
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
		const url = `http://localhost:4000/movies?sortOrder=asc&sortBy=${sortCriterion}`;
		console.log(url);
		fetch(url)
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

	useEffect(() => {
		if (genre != null && genre != activeGenre) {
			genreHandler(genre);
		}

		if (sortBy != null && sortBy != sortCriterion) {
			sortHandler(sortBy);
		}

		if (movieSearched != null && movieSearched != searchQuery) {
			movieSearchHandler(movieSearched);
		}
	}, [movieSearched, sortBy, genre]);

	const sortHandler = (value) => {
		console.log(`Inside sort Handler: ${value}`);
		setSearchParams({ sortBy: value });
		setSortCriterion(value);
	};

	const genreHandler = (value) => {
		console.log(`Inside genre handler : ${value}`);
		setSearchParams({ genre: value });
		setActiveGenre(value);
	};

	const movieSearchHandler = (value) => {
		console.log(`Inside movie search hanler ${value}`);
		setSearchParams({ query: value });
		setSearchQuery(value);
	};

	const scrollHandler = () => {
		window.scrollTo({
			top: 130,
			left: 0,
			behavior: "auto",
		});
	};

	return (
		<>
			<SearchForm
				searchValue={searchQuery}
				searchHandler={movieSearchHandler}
			/>
			<div>
				<GenreSelect
					genres={genres}
					selectedGenre={activeGenre}
					onSelect={genreHandler}
				/>
				<SortControl
					sortBy={sortCriterion}
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
							movieId={movie.id}
							imageUrl={movie.poster_path}
							movieName={movie.title}
							releaseDate={movie.release_date}
							genres={movie.genres}
							scrollUp={scrollHandler}
						/>
					);
				})}
			</div>
		</>
	);
};

export default MovieList;
