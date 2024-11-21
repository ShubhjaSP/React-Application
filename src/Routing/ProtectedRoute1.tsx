import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute1=()=>{
    

    const auth=localStorage.getItem('token');

    return auth ? <Outlet/> :<Navigate to="/signup" />
}

export default ProtectedRoute1;