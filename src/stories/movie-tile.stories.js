import MovieTile from "../component/movie-tile/movie-tile.component";

export default {
  title: "Movie Tile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    imageUrl: "",
    movieName: "",
    releaseYear: "",
    genres: "",
    onMovieClick: "",
  },
};
