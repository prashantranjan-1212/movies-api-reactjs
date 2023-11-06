import { fireEvent, render } from "@testing-library/react";
import Dialog from "./dialog.component";

test("render Dialog Component", () => {
  const title = "Dialog Test";
  const content = "Dailog Content";
  const handleCloseButton = jest.fn();

  const { getByTestId } = render(
    <Dialog
      title={title}
      content={content}
      handleCloseButton={handleCloseButton}
    />
  );

  const dialogTitle = getByTestId("dialog-title");
  expect(dialogTitle).toBeInTheDocument();

  const dialogButton = getByTestId("dialog-button");
  expect(dialogButton).toBeInTheDocument();

  const dialogContent = getByTestId("dialog-content");
  expect(dialogContent).toBeInTheDocument();
});
