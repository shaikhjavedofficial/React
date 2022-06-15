import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/Button";
import { CourseLand, Courses } from "../src/Components/Reducer/CourseLand";
import { CardParent } from "./Components/Cards/CardParent";
import { Counter } from "./Components/Counter";
import { PFooter } from "./Components/Z_Footer/PFooter";

function App() {
  return (
    <div className="App">
      <CourseLand />
      <CardParent />
      <Counter />
      <br />
      <br />
      <PFooter />
    </div>
  );
}

export default App;
