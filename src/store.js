import { createStore } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reactRedux/reducers/index';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store);
export default store; 