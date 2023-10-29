import MovieTile from "../component/movieTile";

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
