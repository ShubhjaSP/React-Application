import React, { useEffect } from 'react';

import './App.css';
import RoutingComponent from './Routing/route';
import { postRequest } from './Api/ApiMethodComfiguration';
import { REFRESH_TOKEN } from './Api/ServerConfigration';
import { jwtDecode } from 'jwt-decode';
// import DrawerAppBar from './Component/CommonComponent/Layout';


// import { RoutingComponent } from './Routing/route';

function App() {
     
  const generateRefreshToken=async ()=>{
    try {
      await postRequest( REFRESH_TOKEN,{
        auth:localStorage.getItem("token")}).then((res:any)=>{

        const refreshToken=res.data.refreshToken;
        console.log("refreshToken", refreshToken)
        localStorage.setItem("token",refreshToken)})
      

    } catch (error) {
      console.log(error)
    }
   }

   useEffect(() => {

    // const token=localStorage.getItem("token")
    // if(token)
    //   {
    //     const decodeToken=jwtDecode(token);
    //     const currentTime=Math.floor(Date.now() /1000)
    //     const expTime=decodeToken.exp;
    //   if(currentTime >= expTime)
    //     {
    //     generateRefreshToken()
    //     }

      

    //   }
    generateRefreshToken()
   
     
   })
   
  return (
    <div className="App">
  
   <RoutingComponent/>
    </div>
  );
}

export default App;
