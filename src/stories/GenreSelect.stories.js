import GenreSelect from "../component/genreSelect";

export default {
  title: "Genre Select",
  component: GenreSelect,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    genres: [
      "Comedy",
      "Sci-fi",
      "Fantasy",
      "Thriller",
      "Action",
      "Documentary",
    ],
  },
};
