import { fireEvent, render } from "@testing-library/react";
import SearchForm from "./searchForm";

test("renders SearchForm component", () => {
  const searchValue = "Search Placeholder";
  const { getByText, getByPlaceholderText } = render(
    <SearchForm searchValue={searchValue} />
  );
  const inputElement = getByPlaceholderText(searchValue);
  expect(inputElement).toBeInTheDocument();
  const searchButton = getByText("Search");
  expect(searchButton).toBeInTheDocument();
});

test("text is entered in the input field", () => {
  const searchValue = "Search Placeholder";
  const { getByPlaceholderText } = render(
    <SearchForm searchValue={searchValue} />
  );
  const inputElement = getByPlaceholderText(searchValue);
  fireEvent.change(inputElement, { target: { value: "New Search" } });
  expect(inputElement.value).toBe("New Search");
});

test("alert when Search button is clicked", () => {
  const searchValue = "Search Placeholder";
  const { getByText, getByPlaceholderText } = render(
    <SearchForm searchValue={searchValue} />
  );
  const inputElement = getByPlaceholderText(searchValue);
  const searchButton = getByText("Search");
  fireEvent.change(inputElement, { target: { value: "New Search" } });
  fireEvent.click(searchButton);
});
