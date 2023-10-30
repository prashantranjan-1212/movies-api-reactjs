import GenreSelect from "../component/genre-select/genre-select.component";

export default {
  title: "Genre Select",
  component: GenreSelect,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...GenreSelect.defaultProps },
};

export const Genre = {
  args: {
    genres: ["Fantasy", "Thriller", "Action", "Documentary"],
  },
};

export const GenreWithValue = {
  args: {
    genres: [
      "Comedy",
      "Sci-fi",
      "Fantasy",
      "Thriller",
      "Action",
      "Documentary",
    ],
    selectedGenre: "Thriller",
  },
};
