import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const AddRecipe = () => {
  const [ndata, setNdata] = useState([{ Id: 0, Name: "0", Cat: "0" }]);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    // handleAdd(ndata);
  };
  const handleInputChange = (event) => {
    event.persist();
    setNdata((ndata) => ({
      ...ndata,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Sr. No : </label>
        <input
          id="Id"
          name="Id"
          type="text"
          onChange={handleInputChange}
          value={ndata.Id}
          required
        />
        <label>Recipe Name : </label>
        <input
          id="Name"
          name="Name"
          type="text"
          onChange={handleInputChange}
          value={ndata.Name}
          required
        />
        <label>Categeoty : </label>
        <input
          id="Cat"
          name="Cat"
          type="text"
          onChange={handleInputChange}
          value={ndata.Cat}
          required
        />
        <button>submit</button>
      </form>
      {/* following are my methods of i/p 
      onChange={(e) => {
            setNdata({ Name: e.target.value });
          }} */}
      <Button href="/">Home</Button>
    </div>
  );
};
