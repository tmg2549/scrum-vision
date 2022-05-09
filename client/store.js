import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index';
// import { loadProductsList, loadProductInfo } from './actions/actions';

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// store.dispatch(loadProductsList());

// export default store;

