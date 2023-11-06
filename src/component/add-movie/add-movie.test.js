import AddMovie from "./add-movie.component";
import { fireEvent, render } from "@testing-library/react";

test("renders Add Movie component", () => {
  const { getByTestId } = render(<AddMovie />);

  const addMovieButton = getByTestId("add-movie-button");
  expect(addMovieButton).toBeInTheDocument();

  fireEvent.click(addMovieButton);

  const dialogTitle = getByTestId("dialog-title");
  expect(dialogTitle).toBeInTheDocument();

  const dialogButton = getByTestId("dialog-button");
  expect(dialogButton).toBeInTheDocument();

  const dialogContent = getByTestId("dialog-content");
  expect(dialogContent).toBeInTheDocument();
});
