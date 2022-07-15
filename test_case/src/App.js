import logo from "./logo.svg";
// import "./App.css";
import { Form } from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 data-testid="myid">first</h1>
        <h6>fdl</h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label htmlFor="search">Search here</label>
        <input data-testid="search" id="search" placeholder="search here" />
        <button>Add</button>
      </header>
    </div>
  );
}

export default App;
