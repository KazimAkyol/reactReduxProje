import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector((state) => state.modal.modal); // Doğru erişim

  console.log(modal, "modal");

  const buttonFunc = () => {};

  return (
    <div>
      <ProductCard />
      {Modal && (
        <Modal
          title={"Ürün Olustur"}
          btnText={"Olustur"}
          btnFunc={buttonFunc}
        />
      )}
    </div>
  );
};

export default Product;
