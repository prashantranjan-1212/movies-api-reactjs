import SortControl from "../component/sort-control/sort-control.component";

export default {
  title: "Sort Control",
  component: SortControl,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...SortControl.defaultProps },
};

export const WithValue = {
  args: {
    title: "12th Fail",
    releaseDate: "2023/10/27",
  },
};
