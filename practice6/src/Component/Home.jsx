import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export const Home = () => {
  const [count, setCount] = useState(0);
  //   count is a variable and setCount is a setter method
  return (
    <div>
      <Child count={count} /> {/*here i have passed the data */}
      <button onClick={() => count > 0 && setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};
