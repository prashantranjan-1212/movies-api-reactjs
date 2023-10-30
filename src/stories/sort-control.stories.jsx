import SortControl from "../component/sort-control/sort-control.component";

export default {
  title: "Sort Control",
  component: SortControl,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    releaseDate: "",
    title: "",
  },
};
