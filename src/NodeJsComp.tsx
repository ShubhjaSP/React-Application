

import React, { useEffect, useState } from "react";
import { getRequest } from "./Api/ApiMethodComfiguration";
import { ARTLIST } from "./Api/ServerConfigration";
import { Badge, Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./Redux/action";

interface Product {
  id: number;
  name: string;
  path: string;
  price: number;
  category:string;
}

export const NodeJsComp: React.FC = () => {
  const [apiResp, setApiResp] = useState<Product[]>([]);
  const dispatch=useDispatch();
  const selector=useSelector((state:any)=>state.CartReducer.item)
  console.log("selector data",selector)

  const handleAddtoCart = (product: { id: number; name: string }) => {
    // Add logic to add the product to the cart
    const updatedCart = { ...cart };
    updatedCart[product.id] = (updatedCart[product.id] || 0) + 1;
    setCart(updatedCart);
    dispatch({type:ADD_TO_CART, payload:product})
    console.log('Product added to cart:', product);

    
     
  };

const  handleRemoveToCart=(product: { id: number})=>{
  const updatedCart = { ...cart };
  if (updatedCart[product.id] > 1) {
    updatedCart[product.id] -= 1; // Reduce count by 1
  } else {
    delete updatedCart[product.id]; // Remove the product if count becomes zero
  }
  setCart(updatedCart);
  dispatch({type:REMOVE_FROM_CART, payload:""})
}
  // const auth=JSON.stringify(localStorage.getItem('token'))
  const apiCall = () => {
    getRequest(ARTLIST, {
      headers:{
          auth:localStorage.getItem("token"),
      }
    }).then((res: any) => {

      console.log("Res from backend-->", res)
      setApiResp(res?.data);
    }).catch((err: any) => {
      console.log("Error from backend-->", err);
    });
  }

 


  useEffect(() => {
    
    apiCall();
  }, []);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, current) => total + current, 0);
  };

  return (
    <>
      
      <Box sx={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1452069418/photo/stylish-beige-display-stand-stock-background.jpg?s=612x612&w=0&k=20&c=vfMMkK5cyVvTDrIZ6pZgFX056B-h6jvbBxle45dHdTg="})`, backgroundSize: 'cover', minHeight: '100vh',  }}> {/* Apply background image */}

<Grid container spacing={2} direction="row" marginTop={2} >
  
{/* <Cart cart={cart} products={products} /> */}

{apiResp.map((product) => (
  <Grid item key={`${product.id}-${product.name}`}>
  <Card style={{ width: 300 }}>
     <CardMedia
       component="img"
       height="200"
       image={"product.path"}
       alt={product.name}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {product.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Price: ${product.price}
       </Typography>
       <Button variant="contained"  sx={{ marginRight: '10px' }}  color="primary"  onClick={()=>handleAddtoCart({ id: product.id, name: product.name })} >
         Add 
       </Button>
       <Button variant="contained" color="primary" onClick={()=>handleRemoveToCart({ id: product.id})}>
        Remove
       </Button>
     </CardContent>
   </Card>
 </Grid>
))}


  
</Grid>
<Box sx={{ position: 'absolute', top: '90px', right: '40px', fontSize: '24px' }}>
      <Badge badgeContent={getTotalItems()} color="secondary" sx={{ fontSize: '32px' }}>
        <ShoppingCartIcon sx={{ fontSize: '32px' }} />
      </Badge>
    </Box>
</Box>
    </>
  );
}
