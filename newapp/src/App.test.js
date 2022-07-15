import { render, screen } from "@testing-library/react";
import App from "./App";

// two ways yo writing test cases first is test
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
// second is  by using it
it("renders the comp", () => {
  render(<App />);
  const linkelement2 = screen.getByText(/child/i);
  expect(linkelement2).toBeInTheDocument();
});

// third is  describe
describe("the describe", () => {
  test("render the app", () => {
    render(<App />);
    const link1 = screen.getByText(/parent/i);
    expect(link1).toBeInTheDocument();
  });
});
