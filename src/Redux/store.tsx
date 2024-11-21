import { combineReducers, createStore,  } from "@reduxjs/toolkit";
import { LoginReducer } from "./Reducers/loginReducer";
import { CartReducer } from "./Reducers/CartReducer";


 const allReducers=combineReducers({
   
    LoginReducer:LoginReducer,
    CartReducer:CartReducer

})

export const store=createStore(allReducers);