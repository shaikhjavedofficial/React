import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userData } from "../Reducer/userData";
export const Home2 = () => {
  const history = useHistory();
  useEffect(() => {
    if (!(userData.token == localStorage.getItem("token"))) {
      history.push("/");
    }
  }, []);
  return <div>Home</div>;
};
