import MovieTile from "../component/movie-tile/movie-tile.component";

export default {
  title: "Movie Tile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...MovieTile.defaultProps },
};

export const WithValue = {
  args: {
    imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    movieName: "Pathan",
    releaseDate: new Date(2023, 1, 26),
    genres: ["Action", "Thriller", "Adventure"],
  },
};
