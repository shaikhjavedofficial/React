import { render, screen } from "@testing-library/react";
import App from "./App";
//This is an test App Exampel
//First method of writing the test case
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// Second method of writing the test case
it("renders learn react link2", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
