import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);

  console.log(modal, "modal");
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default Product;
