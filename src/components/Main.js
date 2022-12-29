import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  emptyCart,
  removeFromCart,
  productList,
} from "../redux/action";
import CardList from "./CardList";

const Main = () => {
  return (
    <div>
      <CardList />
    </div>
  );
};

export default Main;
