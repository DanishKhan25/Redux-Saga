import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, emptyCart, removeFromCart } from "../redux/action";

const Buttons = () => {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addToCart())}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart())}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    </div>
  );
};

export default Buttons;
