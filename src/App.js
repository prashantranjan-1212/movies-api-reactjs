import { Component } from "react";
import "./App.css";
import Counter from "./component/counter/counter.component";
import GenreSelect from "./component/genre-select/genre-select.component";
import SearchForm from "./component/search-form/search-form.component";
import MovieTile from "./component/movie-tile/movie-tile.component";
import MovieDetails from "./component/movie-tile/movie-tile.component";
import SortControl from "./component/sort-control/sort-control.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedGenre: null,
    };
  }

  genres = ["Comedy", "Sci-fi", "Fantasy", "Thriller", "Action", "Documentary"];

  movies = [
    {
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
      movieName: "10th Fail",
      releaseYear: "2013",
      genres: ["Action", "Adventure"],
    },
    {
      imageUrl: "https://robohash.org/2?set=set2&size=180x180",
      movieName: "11th Fail",
      releaseYear: "2020",
      genres: ["Action", "Adventure"],
    },
    {
      imageUrl: "https://robohash.org/3?set=set2&size=180x180",
      movieName: "12th Fail",
      releaseYear: "2023",
      genres: ["Action", "Adventure"],
    },
  ];

  genreSelectHandler = (genre) => {
    this.setState(() => {
      return { selectedGenre: genre };
    });
  };

  handleMovieClick = (movieName) => {
    console.log(movieName);
  };

  onSortHandler = () => {
    console.log("Handler Called");
  };

  render() {
    const {
      genreSelectHandler,
      handleMovieClick,
      genres,
      movies,
      onSortHandler,
    } = this;
    const { selectedGenre } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <Counter initialValue={10} />
          <SearchForm searchValue={"search movie"} />
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={genreSelectHandler}
          />
          {movies.map((movie) => {
            return (
              <MovieTile
                imageUrl={movie.imageUrl}
                movieName={movie.movieName}
                releaseYear={movie.releaseYear}
                genres={movie.genres}
                onMovieClick={handleMovieClick}
              />
            );
          })}
          <SortControl
            title={movies[0].movieName}
            releaseDate={movies[0].releaseYear}
            onSortControl={onSortHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
