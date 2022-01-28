import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";

describe("Login Component", () => {
  const component = shallow(<Login />);
  it("have input fields", () => {
    const inputs = component.find(/'input'/i);
    expect(inputs.length).toBe(1);
  });
});

describe("functions", ()=>{
    const component = shallow(<)
})