import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routers } from "./Routers";
import { getProducts } from "../Service/products";
//api call , can be done on index

export const Home = () => {
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
      <Routers />
    </div>
  );
};
