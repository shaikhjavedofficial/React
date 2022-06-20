import { render, screen } from "@testing-library/react";
import { Home } from "../Components/Home";

// __test__ method of testing
test("__test__ method", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
