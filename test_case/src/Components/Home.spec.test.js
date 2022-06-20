import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

//The Second method of writing
test("app spec test case", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
