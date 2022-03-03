import axios from 'axios';
import * as types from '../constants/actionTypes';

export const loadProductsList = () => (dispatch, getState) => {
  axios.put('/product-list', getState().products.productsList)
    .then(({ data, status }) => {
      if (status === 200) {
        dispatch({
          type: types.LOAD_PRODUCTS_LIST,
          payload: data
        })
      };
    })
    .catch(console.error);
};