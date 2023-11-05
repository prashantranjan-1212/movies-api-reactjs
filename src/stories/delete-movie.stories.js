import DeleteMovie from "../component/delete-movie/delete-movie.component";

export default {
  title: "Delete Movie",
  component: DeleteMovie,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  argTypes: { dialogOpen: { control: "boolean" } },
};
