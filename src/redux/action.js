// Action Types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const PRODUCT_LIST = "PRODUCT_LIST";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

// Actions
const addToCart = () => {
  return {
    type: ADD_TO_CART,
  };
};
const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
  };
};
const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
const setProductList = (data) => {
  console.log("set data");
  return {
    type: SET_PRODUCT_LIST,
    data,
  };
};

export { addToCart, removeFromCart, emptyCart, productList, setProductList };
// reducer
