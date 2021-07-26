import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/Button';
import {CourseLand, Courses} from "../src/Components/Reducer/CourseLand";
import {CardParent} from "./Components/Cards/CardParent"
import {Counter} from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <CourseLand/>
      <CardParent/>
      <Counter/>
    </div>
  );
}

export default App;
