import React from "react";
import { MdPostAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-7 rounded-lg" name="" id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input
            className="h-7 rounded-lg"
            type="text"
            placeholder="Arama yapiniz..."
          />
        </div>
        <div>
          <MdPostAdd />
        </div>
      </div>
    </div>
  );
};

export default Header;
