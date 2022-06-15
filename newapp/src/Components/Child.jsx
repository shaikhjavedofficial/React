import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Child mount");
  }
  componentWillUnmount() {
    console.log("child unmount");
  }
  render() {
    this.componentWillUnmount();
    return <div>Child</div>;
  }
}
export default Child;
