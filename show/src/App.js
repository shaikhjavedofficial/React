import logo from "./logo.svg";
import "./App.css";
import { Create } from "./Components/Create";
import { Read } from "./Components/Read";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/create" component={Create} />
      </div>
      <div className="App">
        <Route exact path="/" component={Read} />
      </div>
    </Router>
  );
}

export default App;
