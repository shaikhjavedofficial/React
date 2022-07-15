import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Login } from "./Login";

test("simple test", () => {
  const history = createMemoryHistory();
  const handleLogin1 = () => {
    console.log(" ");
  };
  render(
    <Router history={history}>
      <Login handleLogin1={() => handleLogin1()} />
    </Router>
  );
  // screen.debug();
});
