import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/Button";
import { PFooter } from "./Components/Z_Footer/PFooter";
import Body from "./Components/B_Body/Body";
// import Nav from "./Components/A_Header/Nav";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Body />
      <br />
      <br />
      <PFooter />
    </div>
  );
}

export default App;
