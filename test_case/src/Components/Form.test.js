import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Form } from "./Form";

describe("Form page", () => {
  // when we want to achive timeout funcionality and the waiting time is more then use
  jest.setTimeout(100000);
  test("button disabled", () => {
    render(<Form />);
    const button_dis = screen.getByRole("button", { name: "add" });
    // first we need to perform the action for that fireevent
    fireEvent.click(button_dis);
    // then check the button is now disbaled
    expect(button_dis).toBeDisabled();
  });
  test("submit check", () => {
    render(<Form />);
    const button_dis = screen.getByRole("button", { name: "add" });
    fireEvent.click(button_dis);
    // after checking the button is diabled at the same time message is changed
    const msg = screen.getByTestId("success");
    // to search the text is in the messaage
    expect(msg).toHaveTextContent("Added");
    expect(msg).toHaveTextContent("Add");
  });
  it("valid user or  valid entry", async () => {
    render(<Form />);
    // find item   by its placeholder
    const inpvalue = await screen.findByPlaceholderText("Enter Name");
    // fireevent to change the value of placeholder
    fireEvent.change(inpvalue, { target: { value: "hello" } });
    // check the msg
    const msg = await screen.findByTestId("success");
    expect(msg).toHaveTextContent("");
  });
  //   as we have an condition  that the if we write an number then it will give Not a number message
  it("invalid user or invalid entry ", () => {
    render(<Form />);
    const inpvalue = screen.queryByPlaceholderText("Enter Name");
    // set the placeholder value to number
    fireEvent.change(inpvalue, { target: { value: "56454" } });
    const msg = screen.queryByTestId("success");
    expect(msg).toHaveTextContent("Not a Number");
  });
  //   wait for impelment
  test("wait for ", async () => {
    render(<Form />);
    const btn = await screen.findByRole("button", { name: "add" });
    fireEvent.click(btn);
    {
      /* //if directly try to access the setTimeOut functionality then it will give us error
    //to check setTimeOut function in the component
        await waitFor(() => {
      screen.getByTestId("test-list");
    });
*/
    }
    // above will not work for long time, so give attribute timeout but it requires jest.setTimeOut()
    await waitFor(
      () => {
        screen.getByTestId("test-list");
      },
      { timeout: 10000 }
    );
    expect(screen.getByTestId("test-list")).toHaveTextContent("test list");
  });
  test(" alternate to waitfor using findby ", async () => {
    render(<Form />);
    const btn = screen.getByRole("button", { name: "add" });
    fireEvent.click(btn);
    const list = await screen.findByTestId("test-list");
    expect(list).toHaveTextContent("test list");
  });
});
