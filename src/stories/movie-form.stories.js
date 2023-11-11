import MovieForm from "../component/movie-form/movie-form.component";

export default {
  title: "Movie Form",
  component: MovieForm,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...MovieForm.defaultProps },
};
