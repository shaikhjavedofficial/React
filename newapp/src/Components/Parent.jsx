import React from "react";
import Child from "./Child";
class Parent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("parent mount");
  }
  componentWillUnmount() {
    console.log("parent unmount");
  }
  render() {
    this.componentWillUnmount();
    return (
      <div>
        parent
        <Child />
      </div>
    );
  }
}
export default Parent;
