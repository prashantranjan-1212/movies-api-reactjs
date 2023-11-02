import { Component } from "react";
import "./App.css";
import Counter from "./component/counter/counter.component";
import GenreSelect from "./component/genre-select/genre-select.component";
import SearchForm from "./component/search-form/search-form.component";
import MovieTile from "./component/movie-tile/movie-tile.component";
import MovieDetails from "./component/movie-details/movie-details.component";
import SortControl from "./component/sort-control/sort-control.component";
import Dialog from "./component/dialog/dialog.component";
import MovieForm from "./component/movie-form/movie-form.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedGenre: null,
      selectedMovie: {},
      movies: [
        {
          id: 1,
          imageUrl: "https://robohash.org/1?set=set2&size=180x180",
          movieName: "10th Fail",
          releaseDate: new Date(2023, 11, 26),
          genres: ["Action", "Adventure"],
          rating: 3.5,
          duration: 125,
          description: "Fantastic Movie",
        },
        {
          id: 2,
          imageUrl: "https://robohash.org/2?set=set2&size=180x180",
          movieName: "11th Fail",
          releaseDate: new Date(2020, 8, 27),
          genres: ["Action", "Adventure"],
          rating: 3.5,
          duration: 125,
          description: "Fantastic Movie",
        },
        {
          id: 3,
          imageUrl: "https://robohash.org/3?set=set2&size=180x180",
          movieName: "12th Fail",
          releaseDate: new Date(2010, 2, 23),
          genres: ["Action", "Adventure"],
          rating: 3.5,
          duration: 125,
          description: "Fantastic Movie",
        },
      ],
    };
  }

  genres = ["Comedy", "Sci-fi", "Fantasy", "Thriller", "Action", "Documentary"];

  onSortHandler = (value) => {
    if (value === "releaseDate") {
      console.log("Sort By Release Date");
      this.sortByReleaseDate();
    } else if (value === "title") {
      console.log("Sort By Title");
      this.sortByTitle();
    }
  };

  sortByReleaseDate = () => {
    console.log("sortByReleaseDate function called");
    const sortedMovieListByReleaseDate = this.state.movies.sort((a, b) => {
      if (a.releaseDate < b.releaseDate) {
        return -1;
      }
      if (a.releaseDate < b.releaseDate) {
        return 1;
      }
      return 0;
    });
    this.setState(() => {
      return { movies: sortedMovieListByReleaseDate };
    });
  };

  sortByTitle = () => {
    console.log("sortByTitle function called");
    const sortedMovieListByTitle = this.state.movies.sort((a, b) => {
      if (a.movieName < b.movieName) {
        return -1;
      }
      if (a.movieName < b.movieName) {
        return 1;
      }
      return 0;
    });
    this.setState(() => {
      return { movies: sortedMovieListByTitle };
    });
  };

  handleMovieClick = (value) => {
    this.state.movies.forEach((movie) => {
      if (movie.movieName === value) {
        this.setState(() => {
          return { selectedMovie: movie };
        });
      }
    });
  };

  render() {
    const { genreSelectHandler, handleMovieClick, genres, onSortHandler } =
      this;
    const { selectedGenre, selectedMovie, movies } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <Dialog content={"Child Element"} />
          <MovieForm {...movies[0]} />
          <Counter initialValue={10} />
          <SearchForm searchValue={"search movie"} />
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={genreSelectHandler}
          />
          <SortControl
            title={"title"}
            releaseDate={"releaseDate"}
            onSortControl={(value) => onSortHandler(value)}
          />
          <div className="movie-tile-conatiner">
            {movies.map((movie) => {
              return (
                <MovieTile
                  key={movie.id}
                  imageUrl={movie.imageUrl}
                  movieName={movie.movieName}
                  releaseDate={movie.releaseDate}
                  genres={movie.genres}
                  onMovieClick={handleMovieClick}
                />
              );
            })}
          </div>
          <MovieDetails
            imageUrl={selectedMovie.imageUrl}
            movieName={selectedMovie.movieName}
            releaseDate={selectedMovie.releaseDate}
            rating={selectedMovie.rating}
            duration={selectedMovie.duration}
            description={selectedMovie.description}
          />
        </div>
      </div>
    );
  }
}

export default App;
