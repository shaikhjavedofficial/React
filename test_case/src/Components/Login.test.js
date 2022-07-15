import {
  render,
  fireEvent,
  screen,
  waitFor,
  debug,
} from "@testing-library/react";
import { Login } from "./Login";
import { postData } from "../mocks/handlers";

describe("Login test", () => {
  // below are the testing function which could run  before a test case or before starting and after a test  case or after everything
  beforeAll(() => {
    console.log(
      " ========================= B efore All========================="
    );
  });
  beforeEach(function () {
    console.log("=================before each======================");
  });
  afterEach(function () {
    console.log("================after each ==============================");
  });
  afterAll(() => {
    console.log("=================after All=======================");
  });
  test("test APi", async () => {
    render(<Login />);
    await waitFor(() => {
      // thsi will give  the rendered component and test ids
      screen.debug();
      let i = 0;
      postData.forEach((item) => {
        expect(screen.getByTestId(item.name)).toBeInTheDocument();
        i++;
      });
      expect(i).toBe(2);
      expect(screen.getByTestId("success")).toHaveTextContent("devil's");
    });
  });
  test("test APi - 2", async () => {
    render(<Login />);
    await waitFor(() => {
      // thsi will give  the rendered component and test ids
      screen.debug();
      let i = 0;
      postData.forEach((item) => {
        expect(screen.getByTestId(item.name)).toBeInTheDocument();
        i++;
      });
      expect(i).toBe(2);
      expect(screen.getByTestId("success")).toHaveTextContent("devil's");
    });
  });
});
