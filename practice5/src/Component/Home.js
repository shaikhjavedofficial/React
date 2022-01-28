import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const getData = (state) => state.DataReducer.value;
  const selector = useSelector(getData);
  const [count, setCount] = useState(selector);

  return (
    <div>
      <button onClick={() => count >= 0 && setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
