// import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { Home } from "@mui/icons-material";
import { About } from "../Component/CommonComponent/About";
import { Login } from "../Component/CommonComponent/Login";
import { Contact } from '../Component/CommonComponent/Contact';
import { StartPage } from "../Component/CommonComponent/Home";
import Layout from "../Component/CommonComponent/Header";
import Layout1 from '../Component/CommonComponent/Layout1';
import { AddArt} from '../Component/Types of  Art/Paintings'

import { useEffect, useState } from 'react';
import ProtectedRoute from './protectedRoute';
import { useSelector } from 'react-redux';
import ButtonAppBar from '../Component/CommonComponent/Layout1';
import DrawerAppBar from '../Component/CommonComponent/Layout1';
import SignUp from '../Component/CommonComponent/SignUp';
import ProtectedRoute1 from './ProtectedRoute1';

import MenuAppBar from '../Component/CommonComponent/Layout1';
import { ItemList } from '../Component/CommonComponent/ItemList';
import { NodeJsComp } from '../NodeJsComp';
import ProductList from '../Component/CommonComponent/CartList';
import CartList from '../Component/CommonComponent/CartList';
import Recovery from '../Component/CommonComponent/Recovery';




function RoutingComponent() {


  

  const loginState=useSelector((state:any)=>state.LoginReducer);
  const[isAuthenticated, setisAuthenticated]=useState<any>(false);
  const[adminRoute, setadminRoute]=useState<any>(false);

  useEffect(()=>{
    const userToken=sessionStorage.getItem("myToken");
  if(loginState.login){
    if(userToken!== null && userToken!== ''){
        setisAuthenticated(true);
        setadminRoute(true);
       }
    
      }

    return()=>{

    }
  },[loginState.login]);

  return (
 

   

    <>
     {console.log('loginState in route',loginState)}
    <BrowserRouter>
    {/* <Layout/> */}
    <MenuAppBar/>

    <Routes>
           <Route path='/' element={<StartPage/>}> </Route>
            <Route path='/startpage' element={<StartPage/>}> </Route>
            <Route path='/about' element={<About/>}> </Route>
            <Route path='/login' element={<Login/>}> </Route>
             <Route path='/contact' element={<Contact/>}> </Route>
             <Route path='/signup' element={<SignUp/>}> </Route>
             <Route path='/nodejs' element={<NodeJsComp/>}> </Route>
             <Route path='/cardlist' element={<ItemList/>}> </Route>
             <Route path='/product' element={<CartList/>}> </Route>
             <Route path='/forgetpassword' element={<Recovery/>}> </Route>
             {/* <Route path='/paintings' element={<AddArt/>}> </Route> */}
          
             {/* <Route path='/layout1' element={<DrawerAppBar/>}> </Route> */}
          
          
             {/* {userToken!== null && userToken!== ''  ? */}


             {/* {loginState?.login ? (<>
        
             <Route path='/paintings' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true}><Paintings/></ProtectedRoute>} />
             </>  ): null} */}
            
            <Route element={<ProtectedRoute1/>}>
                  <Route path='/paintings' element={<AddArt/>}> </Route>
                 
             </Route>   
               

     </Routes>
    </BrowserRouter>
    </>
  );
}

export default RoutingComponent;