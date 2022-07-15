import { render, screen } from "@testing-library/react";
import App from "./App";

// This is test case app for test cases
// First of method of  writing test
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// second method of writing test
it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// third method  of writing the test  case
describe("this is an parent test suit", () => {
  test("find learn react", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// Query Methods  ==========================    =
// Three types
describe("query Methods", () => {
  //  1. getBy
  test("getBy method", () => {
    render(<App />);
    // either use text  or regex
    const linkElem = screen.getByText("Learn React");
    expect(linkElem).toBeInTheDocument();
  });
  // 2. queryby
  it("queryby method", () => {
    render(<App />);
    // either use text  or regex
    const linkElem = screen.queryByText("Learn React");
    expect(linkElem).toBeInTheDocument();
  });
  // 3. findBy
  test("find By  method", async () => {
    render(<App />);
    // either use text  or regex
    const linkElem = await screen.findByText("Learn React");
    expect(linkElem).toBeInTheDocument();
  });
});

// text and other methods
describe("text and other methods", () => {
  test("if we don't have exact text ", () => {
    render(<App />);
    // for normal text
    //the excat here tells that not find exact text instead find the one's which contains the given text
    const text = screen.queryByText("earn", { exact: false });
    expect(text).toBeInTheDocument();
    // for label text
    const label = screen.queryByLabelText("Search here");
    expect(label).toBeInTheDocument();
    // for placeholder text
    const placeholder = screen.queryByPlaceholderText("search here");
    expect(placeholder).toBeInTheDocument();
    // for Role which is nothing but tags
    const role1 = screen.getByRole("button");
    expect(role1).toBeInTheDocument();
    // role can have  extra attribute  like name which is the text in  betweeb tags
    const role2 = screen.getByRole("button", { name: "Add" });
    expect(role2).toBeInTheDocument();
    // for headings h1 to h6
    const heading = screen.queryByRole("heading", { name: "first" });
    expect(heading).toBeInTheDocument();
    // QUERY ALL
    const queryall = screen.queryAllByRole("heading");
    expect(queryall.length).toBe(2);
  });
});

// id method
describe("id methods", () => {
  test("by id", async () => {
    render(<App />);
    // if  we have an id then
    const byid = await screen.findByTestId("search");
    expect(byid).toBeInTheDocument();
    // if we have excluded an id but want to check if exist
    // here we can only use query
    const nullId = screen.queryByTestId("465");
    console.log(nullId);
    expect(nullId).toBeNull();
    // here findby and getby will not work cause  both will give the item already in the document but query will search if it is thre or not
    // const nullIdd = screen.getByTestId("465");
    // const nullIdd = await screen.findByTestId("465");
  });
});
