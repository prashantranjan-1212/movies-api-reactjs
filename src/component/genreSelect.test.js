import { fireEvent, render } from "@testing-library/react";
import GenreSelect from "./genreSelect";

test("renders GenreSelect component", () => {
  const genres = [
    "Comedy",
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Action",
    "Documentary",
  ];
  const { getByPlaceholderText } = render(<GenreSelect genres={genres} />);

  const inputElement = getByPlaceholderText("Search Genre");
  expect(inputElement).toBeInTheDocument();
});

test("updates the selectedButton state when a genre button is clicked", () => {
  const genres = [
    "Comedy",
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Action",
    "Documentary",
  ];
  const { getByText } = render(<GenreSelect genres={genres} />);
  const actionButton = getByText("Action");
  fireEvent.click(actionButton);
});

test("updates the selectedButton state when a genre is typed in the input field", () => {
  const genres = [
    "Comedy",
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Action",
    "Documentary",
  ];
  render(<GenreSelect genres={genres} />);
});
