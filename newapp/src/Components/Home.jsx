import React from "react";
import Parent from "./Parent";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("home mount");
  }
  componentWillUnmount() {
    console.log("home unmount");
  }
  render() {
    this.componentWillUnmount();
    return (
      <div>
        Home
        <Parent />
      </div>
    );
  }
}
export default Home;
