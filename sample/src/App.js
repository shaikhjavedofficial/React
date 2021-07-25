import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/Button';
import {CourseLand, Courses} from "../src/Components/Reducer/CourseLand";

function App() {
  return (
    <div className="App">
      <CourseLand/>
    </div>
  );
}

export default App;
