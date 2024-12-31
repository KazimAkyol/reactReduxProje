//? React, JSX kullanır.
//? JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz.

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//! Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir.

//! NOTES:
//* styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır.
//* Material UI, Styled Component, Sass, Bootstrap etc. gibi 3.part kütüphaneler de stil için kullanılabilir.

//? Dahili bir resim eklemek icin import yapmak gereklidir.
//? Ancak public klasöründeki resimler importsuz bir şekilde erisilebilir.

import resim from "../assets/tree.webp";
import resim2 from "../assets/winter1.jpg";

//! external css importu
import "./Msg.css";

const Msg = () => {
  //! JavaScript alani
  //! internal css

  const stil = {
    color: "green",
    fontFamily: "Tahoma",
    border: "2px solid red",
  };

  return (
    //! React alani

    <div>
      <h2 style={stil}>MSG ALANI</h2>

      {/* Inline CSS (Cift suslu ile key-value yapisi ile stil verilebilir)  */}
      <p style={{ backgroundColor: "red", fontSize: "30px" }}>
        hosgeldin react
      </p>

      {/* public'in icindeki img */}
      <img src="./assets/winter1.jpg" alt="" />

      {/* src icincdeki img */}
      <img className="image" src={resim} alt="" />
      <img src={resim2} alt="" />

      {/* google dan aldık */}
      <img
        width="300px"
        src="https://cdn.pixabay.com/photo/2023/06/13/16/25/baby-8061294_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default Msg;
