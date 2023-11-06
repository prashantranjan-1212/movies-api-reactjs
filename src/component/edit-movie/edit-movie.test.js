import EditMovie from "./edit-movie.component";
import { fireEvent, render } from "@testing-library/react";

test("renders Edit Movie component", () => {
  const { getByTestId } = render(<EditMovie />);

  const editMovieButton = getByTestId("edit-movie-button");
  expect(editMovieButton).toBeInTheDocument();

  fireEvent.click(editMovieButton);

  const dialogTitle = getByTestId("dialog-title");
  expect(dialogTitle).toBeInTheDocument();

  const dialogButton = getByTestId("dialog-button");
  expect(dialogButton).toBeInTheDocument();

  const dialogContent = getByTestId("dialog-content");
  expect(dialogContent).toBeInTheDocument();
});
