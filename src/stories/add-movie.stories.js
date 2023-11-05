import AddMovie from "../component/add-movie/add-movie.component";

export default {
  title: "Add Movie",
  component: AddMovie,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  argTypes: { dialogOpen: { control: "boolean" } },
};
