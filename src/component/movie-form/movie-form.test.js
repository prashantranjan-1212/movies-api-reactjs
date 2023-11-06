import MovieForm from "./movie-form.component";
import { fireEvent, render } from "@testing-library/react";

test("renders Movie Form component", () => {
  const onSubmit = jest.fn();
  const movieInfo = {
    title: "Jawan",
    releaseDate: "2023-02-26",
    movieUrl: "https://google.com/movie",
    rating: 8,
    genre: "Action",
    runtime: "120",
    overview: "A Master Peice",
  };

  const { getByTestId } = render(
    <MovieForm movieInfo={movieInfo} onSubmit={onSubmit} />
  );

  const movieFormConatiner = getByTestId("movie-form-conatiner");
  expect(movieFormConatiner).toBeInTheDocument();

  const titleLable = getByTestId("title-label");
  expect(titleLable).toHaveTextContent("Title");

  const titleInput = getByTestId("title-input");
  expect(titleInput).toHaveValue("Jawan");

  const releaseDateLabel = getByTestId("release-date-label");
  expect(releaseDateLabel).toHaveTextContent("Release Date");

  const releaseDateInput = getByTestId("release-date-input");
  expect(releaseDateInput).toHaveValue("2023-02-26");

  const movieUrlLabel = getByTestId("movie-url-label");
  expect(movieUrlLabel).toHaveTextContent("Movie Url");

  const movieUrlInput = getByTestId("movie-url-input");
  expect(movieUrlInput).toHaveValue("https://google.com/movie");

  const ratingLabel = getByTestId("rating-label");
  expect(ratingLabel).toHaveTextContent("Rating");

  const ratingInput = getByTestId("rating-input");
  expect(ratingInput).toHaveValue(8);

  const genreLabel = getByTestId("genre-label");
  expect(genreLabel).toHaveTextContent("Genre");

  const genreSelect = getByTestId("genre-select");
  expect(genreSelect).toHaveValue("Action");

  const runtimeLabel = getByTestId("runtime-label");
  expect(runtimeLabel).toHaveTextContent("Runtime");

  const runtimeInput = getByTestId("runtime-input");
  expect(runtimeInput).toHaveValue("120");

  const overviewLabel = getByTestId("overview-label");
  expect(overviewLabel).toHaveTextContent("Overview");

  const overviewTextArea = getByTestId("overview-textarea");
  expect(overviewTextArea).toHaveValue("A Master Peice");

  const movieFormSubmit = getByTestId("movie-form-submit");
  expect(movieFormSubmit).toBeInTheDocument();
});
