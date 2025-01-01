import React from "react";
import { GrClose } from "react-icons/gr";
import Input from "./Input";

const Modal = ({ title, content, btnText, btnFunc }) => {
  const onchangeFunc = (e) => {};

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="2xl">{title}</div>
          <GrClose size={24} />
        </div>
        <Input
          placeholder={"Ürün Ekle"}
          name={"name"}
          id={"name"}
          onchange={onchangeFunc}
        />
      </div>
    </div>
  );
};

export default Modal;
