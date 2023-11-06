import DeleteMovie from "./delete-movie.component";
import { fireEvent, render } from "@testing-library/react";

test("renders Delete Movie component", () => {
  const { getByTestId } = render(<DeleteMovie />);

  const deleteButton = getByTestId("delete-movie-button");
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  const dialogTitle = getByTestId("dialog-title");
  expect(dialogTitle).toBeInTheDocument();

  const dialogButton = getByTestId("dialog-button");
  expect(dialogButton).toBeInTheDocument();

  const dialogContent = getByTestId("dialog-content");
  expect(dialogContent).toBeInTheDocument();
});
