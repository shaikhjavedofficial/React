import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const { name, pass, email } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setformData(...formData, [e.target.name, e.target.value]);
  };
  return (
    <div style={{ "text-align": "center" }}>
      <form action="">
        <label htmlFor="">Name : </label>
        <br />
        <input type="text" name="name" id="name" value={name} />
        <br />
        <label htmlFor="">Email : </label>
        <br />
        <input type="text" name="email" id="email" value={email} />
        <br />
        <label htmlFor="">Password : </label>
        <br />
        <input type="text" name="pass" id="pass" value={pass} />
        <br />
        <button onClick={() => handleSubmit()}>submit</button>
      </form>
      <label>form Data</label>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <h1>Password : {pass}</h1>
    </div>
  );
}

export default App;
