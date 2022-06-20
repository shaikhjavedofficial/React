import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form page", () => {
  test("button disabled", () => {
    render(<Form />);
    const button_dis = screen.getByRole("button", { name: "add" });
    fireEvent.click(button_dis);
    expect(button_dis).toBeDisabled();
  });
});
