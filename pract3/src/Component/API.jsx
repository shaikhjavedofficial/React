import axios from "axios";
import React from "react";

export const API = () => {
  const handleApi = () => {
    axios.get("https://localhost:40").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <button onClick={handleApi}>click me</button>
    </div>
  );
};
