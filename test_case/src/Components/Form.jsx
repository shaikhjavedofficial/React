import React, { useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [list, setList] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    setMsg("Added");
    setTimeout(() => setList("test list"), 4000);
  };
  const changeHandler = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length) {
      setMsg("Not a Number");
    } else {
      setMsg("");
    }
    setUsername(e.target.value);
  };
  return (
    <div>
      <h1>User</h1>
      <br />
      <p data-testid="success">{msg}</p> <br />
      <form>
        <label htmlFor="username-input">username : </label>
        <input
          type="text"
          id="username-input"
          placeholder="Enter Name"
          value={username}
          onChange={changeHandler}
        />
        <br /> <br />
        <button onClick={submitForm} disabled={msg.length ? true : false}>
          add
        </button>
      </form>
      {list ? (
        <ul>
          <li data-testid="test list">{list}</li>
        </ul>
      ) : null}
    </div>
  );
};
