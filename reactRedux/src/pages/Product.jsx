import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector((state) => state.modal.modal); // Doğru erişim

  console.log(modal, "modal");

  return (
    <div>
      <ProductCard />
      {Modal && <Modal />}
    </div>
  );
};

export default Product;
