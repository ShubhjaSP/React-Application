// import { AddToCart, REMOVE_FROM_CART} from "../action";

import { Product } from "../../types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";



// const initialState={
 
//     item:[],
// }

// export const CartReducer=(state=initialState, action:any)=>{
   
    
//     switch (action.type) {
       
//         case AddToCart:
           
//             return{
//                 ...state,
//                 item: [...state.item, action.payload],
//                 // console.log("Data in item",state.item)

//             }  
//         case REMOVE_FROM_CART :
//             console.log("Removed ",state)
//             state.item.pop();
//                 return {
//                   ...state,
//                 //   item: state.item.filter(item => item !== action.payload),
//                 };    
             

           
           
    
//         default:
//             return{...state};
//     }

// }

// reducer.ts


interface CartState {
  item: { [key: number]: Product & { quantity: number } };
}

const initialState: CartState = {
  item: {},
};

export const CartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingProduct = state.item[product.id];

      return {
        ...state,
        item: {
          ...state.item,
          [product.id]: existingProduct
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : { ...product, quantity: 1 },
        },
      };
    }
    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const currentProduct = state.item[productId];
      if (!currentProduct) return state;

      const updatedItem = { ...state.item };
      if (currentProduct.quantity > 1) {
        updatedItem[productId] = { ...currentProduct, quantity: currentProduct.quantity - 1 };
      } else {
        delete updatedItem[productId];
      }

      return {
        ...state,
        item: updatedItem,
      };
    }
    default:
      return state;
  }
};
