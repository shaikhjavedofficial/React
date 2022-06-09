import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Home } from "./Components/Home";
import { Formik } from "formik";

function App() {
  // var a = "asd";
  // const [formData, setformData] = useState({
  //   name: "",
  //   email: "",
  //   pass: "",
  // });
  // const { name, pass, email } = formData;
  // const [saveData, setSaveData] = useState([]);
  // const onInput = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setformData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setSaveData([...saveData, formData]);
  //   console.log(saveData);
  // };
  return (
    // <div style={{ "text-align": "center" }}>
    //     <form action="" onSubmit={(e) => handleSubmit(e)}>
    //       <label htmlFor="">Name : </label>
    //       <br />
    //       <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         value={name}
    //         onChange={(e) => onInput(e)}
    //       />
    //       <br />
    //       <label htmlFor="">Email : </label>
    //       <br />
    //       <input
    //         type="text"
    //         name="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => onInput(e)}
    //       />
    //       <br />
    //       <label htmlFor="">Password : </label>
    //       <br />
    //       <input
    //         type="text"
    //         name="pass"
    //         id="pass"
    //         value={pass}
    //         onChange={(e) => onInput(e)}
    //       />
    //       <br />
    //       <button type="submit">submit</button>
    //     </form>
    //     <label>form Data</label>
    //     {saveData.map((item) => {
    //       return (
    //         <div>
    //           <h1>Name : {item.name}</h1>
    //           <h1>Email : {item.email}</h1>
    //           <h1>Password : {item.pass}</h1>
    //         </div>
    //       );
    //     })}
    //     <h1>Name : {name}</h1>
    //     <h1>Email : {email}</h1>
    //     <h1>Password : {pass}</h1>{" "}
    //</div>
    <div>
      <Home />
    </div>
  );
}

export default App;
