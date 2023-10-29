import MovieDetails from "../component/movieDetails";

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
