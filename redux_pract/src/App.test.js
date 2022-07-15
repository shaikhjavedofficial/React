import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  render(
    <Router>
      <App />
    </Router>
  );
  // const linkElement = screen.getByText(/ /i);
  // expect(linkElement).toBeInTheDocument();
});
