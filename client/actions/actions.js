import * as types from '../constants/actionTypes';
import axios from 'axios'

export const loadProductsList = () => (dispatch) => {
  axios.get('/api/products-list')
    .then(({ data, status }) => {
      console.log(data)
      if (status === 200) {
        dispatch({
          type: types.LOAD_PRODUCTS_LIST,
          payload: data
        })
      };
    })
    .catch(console.error);
};