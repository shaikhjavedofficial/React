import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routers } from "./Routers";
import { getProducts } from "../Service/products";
//api call , can be done on index

export const Home = () => {
  const [stext, setstext] = useState("");
  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };
  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <Routers setstext={setstext} stext={stext} />
    </div>
  );
};
