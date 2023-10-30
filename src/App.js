import { Component } from "react";
import "./App.css";
import Counter from "./component/counter/counter.component";
import GenreSelect from "./component/genre-select/genre-select.component";
import SearchForm from "./component/search-form/search-form.component";
import MovieTile from "./component/movie-tile/movie-tile.component";
import MovieDetails from "./component/movie-details/movie-details.component";
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
      id: 1,
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
      movieName: "10th Fail",
      releaseDate: new Date(2010, 2, 23),
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
      releaseDate: new Date(2023, 11, 26),
      genres: ["Action", "Adventure"],
      rating: 3.5,
      duration: 125,
      description: "Fantastic Movie",
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
          <SortControl
            title={movies[0].movieName}
            releaseDate={movies[0].releaseDate}
            onSortControl={onSortHandler}
          />
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
          <MovieDetails
            imageUrl={movies[0].imageUrl}
            movieName={movies[0].movieName}
            releaseDate={movies[0].releaseDate}
            rating={movies[0].rating}
            duration={movies[0].duration}
            description={movies[0].description}
          />
        </div>
      </div>
    );
  }
}

export default App;
