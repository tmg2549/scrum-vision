import * as types from '../constants/actionTypes';
import axios from 'axios'

export const loadProductsList = () => (dispatch) => {
  axios.get('/api/products-list')
    .then(({ data, status }) => {
      console.log(data)
      if (status === 200) {
        dispatch({
          type: types.LOAD_PRODUCTS_LIST,
          payload: data.products
        })
      };
    })
    .catch(console.error);
};

export const loadProductInfo = (event) => {
  let id;
  for (const child of event.target.children){
    if (child.value === event.target.value){
      id = child.attributes.productid.value
    }
  }
  id = parseInt(id)
  const body = {id: id}
  axios.get('/api/product', body)
    .then(({ data, status }) => {
      console.log(data)
      if (status === 200) {
        return {
          type: types.LOAD_PRODUCT_INFO,
          payload: data
        }
      };
    })
    .catch(console.error);
};