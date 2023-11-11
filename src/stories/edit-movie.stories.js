import EditMovie from "../component/edit-movie/edit-movie.component";

export default {
  title: "Edit Movie",
  component: EditMovie,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  argTypes: { dialogOpen: { control: "boolean" } },
};
