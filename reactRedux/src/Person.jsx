import React from "react";
import Message from "./Message";

const Person = (props) => {
  // console.log(props)
  // console.log(props,kisi.name)

  // destructuring
  const { name, img, tel } = props.kisi;
  return (
    <div>
      <h1> {name} </h1>
      <img src={img} alt="" />

      <p> {tel} </p>

      <Message />
    </div>
  );
};

export default Person;
