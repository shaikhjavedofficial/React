import React, { useEffect } from "react";
import { userData } from "../Reducer/userData";
export const About = () => {
  useEffect(() => {
    if (!(userData.token == localStorage.getItem("token"))) {
    }
  }, []);
  return <div>About us</div>;
};
