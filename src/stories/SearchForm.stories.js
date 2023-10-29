import SearchForm from "../component/searchForm";

export default {
  title: "Search Form",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    searchValue: "search movies",
  },
};
