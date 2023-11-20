import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
		setActiveGenre(value);
		setSearchParams({ genre: value });
	};

	const movieSearchHandler = (value) => {
		setSearchQuery(value);
		setSearchParams({ query: value });
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
