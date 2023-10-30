import MovieDetails from "../component/movie-details/movie-details.component";

export default {
  title: "Movie Details",
  component: MovieDetails,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...MovieDetails.defaultProps },
};

export const WithValue = {
  args: {
    imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    movieName: "Pathan",
    releaseYear: new Date().toLocaleDateString(),
    rating: 4.5,
    duration: 180,
    description: "Spy and Action",
  },
};
