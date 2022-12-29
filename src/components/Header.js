import React from "react";
import img from "../img/cart-icon.png";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const numberOfItem = useSelector((state) => state);

  return (
    <div className="header">
      <span className="heading">Shop@24</span>

      <div className="cart-logo">
        <span className="count">{numberOfItem.length}</span>
        <img className="cart" src={img} alt="cart-logo" />
      </div>
    </div>
  );
};

export default Header;
