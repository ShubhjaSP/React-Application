import { Product } from "../types";


export const LOGIN="login";
export const LOGOUT="logout";
export const SignUp="signup";
export const ADD_TO_CART = "AddToCart";
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const addToCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });