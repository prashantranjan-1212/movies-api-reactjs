import { fireEvent, render } from "@testing-library/react";
import Counter from "./counter";

test("renders Counter component", () => {
  const { getByTestId } = render(<Counter initialValue={0} />);

  const valueElement = getByTestId("value");
  expect(valueElement).toBeInTheDocument();

  const incrementButton = getByTestId("increment");
  expect(incrementButton).toBeInTheDocument();

  const decrementButton = getByTestId("decrement");
  expect(decrementButton).toBeInTheDocument();
});

test("increment button is clicked", () => {
  const { getByTestId } = render(<Counter initialValue={0} />);

  const incrementButton = getByTestId("increment");
  fireEvent.click(incrementButton);

  const valueElement = getByTestId("value");
  expect(valueElement).toHaveTextContent("1");
});

test("decrement button is clicked", () => {
  const { getByTestId } = render(<Counter initialValue={0} />);

  const decrementButton = getByTestId("decrement");
  fireEvent.click(decrementButton);

  const valueElement = getByTestId("value");
  expect(valueElement).toHaveTextContent("-1");
});
