import { combineReducers } from "@reduxjs/toolkit";
import handleCart from "./handleCart";


const rootReducer = combineReducers({
    handleCart,
  });
  
  export default rootReducer;