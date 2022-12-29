import {
  SET_PRODUCT_LIST,
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "./action";

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };
    case REMOVE_FROM_CART:
      return { ...state };
    case EMPTY_CART:
      return { ...state };
    case SET_PRODUCT_LIST:
      return { ...state, products: action.data };

    default:
      return state;
  }
};

export default reducer;
