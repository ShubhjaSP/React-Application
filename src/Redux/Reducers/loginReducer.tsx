import {LOGIN, LOGOUT } from "../action";



const initialState={
    login: false,
    
}

export const LoginReducer=(state=initialState, action:any)=>{

    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                login:action.payload.login,
              
             }
        
             

             case LOGOUT:
                return{
                    ...initialState,
                    
                 }    
            
           
    
        default:
            return{...state};
    }

}