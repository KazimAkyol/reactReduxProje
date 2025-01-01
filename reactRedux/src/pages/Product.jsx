import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Buttton from "../components/Buttton";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);

  console.log(modal, "modal");

  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

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

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id === loc));
    }
  }, [loc]);

  console.log(productInfo);

  console.log(location?.search.split("=")[1], "data");

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };

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
        value={productInfo.name}
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onchange={(e) => onchangeFunc(e, "price")}
      />
      <Input
        value={productInfo.price}
        type={"file"}
        placeholder={"Resim Sec"}
        name={"url"}
        id={"url"}
        onchange={(e) => onchangeFunc(e, "url")}
      />
      <Buttton
        btnText={loc ? "Ürün Güncelle" : "Ürün Olustur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {data?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>

      {Modal && (
        <Modal
          content={contentModal}
          title={loc ? "Ürün Güncelle" : "Ürün Olustur"}
        />
      )}
    </div>
  );
};

export default Product;
