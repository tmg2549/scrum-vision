import * as types from "../constants/actionTypes";

const initialState = {
  productsList: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload
      };

    case types.LOAD_PRODUCT_INFO:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default productsReducer;