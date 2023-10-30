import SearchForm from "../component/search-form/search-form.component";

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
