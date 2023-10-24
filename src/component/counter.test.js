import { fireEvent, render } from "@testing-library/react";
import Counter from "./counter";

test("renders Counter component", () => {
  const { getByText } = render(<Counter initialValue={0} />);
  const valueElement = getByText("0");
  expect(valueElement).toBeInTheDocument();

  const incrementButton = getByText("Increment");
  const decrementButton = getByText("Decrement");
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test("increment button is clicked", () => {
  const { getByText } = render(<Counter initialValue={0} />);
  const incrementButton = getByText("Increment");
  fireEvent.click(incrementButton);
  const valueElement = getByText("1");
  expect(valueElement).toBeInTheDocument();
});

test("decrement button is clicked", () => {
  const { getByText } = render(<Counter initialValue={0} />);
  const decrementButton = getByText("Decrement");
  fireEvent.click(decrementButton);
  const valueElement = getByText("-1");
  expect(valueElement).toBeInTheDocument();
});
