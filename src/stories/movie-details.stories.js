import MovieDetails from "../component/movie-details/movie-details.component";

export default {
  title: "Movie Details",
  component: MovieDetails,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    imageUrl: "",
    movieName: "",
    releaseYear: "",
    rating: "",
    duration: "",
    description: "",
  },
};
