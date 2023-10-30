import { fireEvent, render, waitFor } from "@testing-library/react";
import SearchForm from "./search-form.component";

test("renders SearchForm component", () => {
  const searchValue = "search movie";
  const { getByTestId } = render(<SearchForm searchValue={searchValue} />);

  const inputElement = getByTestId("search-input");
  expect(inputElement).toBeInTheDocument();

  const searchButton = getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
});

test("text is entered in the input field", () => {
  const searchValue = "search movie";
  const { getByTestId } = render(<SearchForm searchValue={searchValue} />);

  const inputElement = getByTestId("search-input");
  fireEvent.change(inputElement, { target: { value: "New Search" } });
  expect(inputElement.value).toBe("New Search");
});

test("alert when Search button is clicked", () => {
  window.alert = jest.fn();
  const searchValue = "search movie";
  const { getByTestId } = render(<SearchForm searchValue={searchValue} />);

  const inputElement = getByTestId("search-input");
  const searchButton = getByTestId("search-button");

  fireEvent.change(inputElement, { target: { value: "New Search" } });
  fireEvent.click(searchButton);

  waitFor(() => {
    expect(window.alert).toHaveBeenCalledWith("New Search");
  });
});
