import {
  render,
  fireEvent,
  screen,
  waitFor,
  debug,
} from "@testing-library/react";
import { Login } from "./Login";

describe("Login test", () => {
  test("test APi", async () => {
    render(<Login />);
    await waitFor(() => {
      expect(screen.getByTestId("success")).toHaveTextContent("devil's");
    });
  });
});
