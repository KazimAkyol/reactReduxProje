import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Buttton from "../components/Buttton";

const Product = () => {
  const { modal } = useSelector((state) => state.modal.modal); // Doğru erişim

  console.log(modal, "modal");

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onchangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  console.log(productInfo);

  const buttonFunc = () => {};

  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onchange={(e) => onchangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onchange={(e) => onchangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim Sec"}
        name={"url"}
        id={"url"}
        onchange={(e) => onchangeFunc(e, "url")}
      />
      <Buttton btnText={"Olustur"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <ProductCard />
      {Modal && <Modal title={"Ürün Olustur"} content={contentModal} />}
    </div>
  );
};

export default Product;
