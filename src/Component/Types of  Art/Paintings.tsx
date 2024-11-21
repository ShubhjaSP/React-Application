import {  useState } from "react"

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postRequest } from "../../Api/ApiMethodComfiguration";
import { ADD_ART } from "../../Api/ServerConfigration";
import axios from "axios";



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const AddArt=()=>{

    const[useCredential, setuseCredential]=useState<any>(false);
    const navigate=useNavigate();



       
 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

    console.log("data from ",data)
      

      const name= data.get('name');
      const price= data.get('price');
      const category= data.get('category');
      const uid= data.get('uid');
      const image=data.get("image")
      
      
      // console.log({
      //   name: name,
      // price: price,
      // category:category,
      // uid:uid,
      // image:image
      // });
    //   let result= await fetch('http://localhost:3000/addArt',{
    //   method:'post',
    //   body:JSON.stringify({name,price,category,uid}),
    //   headers:{
    //       'Content-Type':'application/json'
    //   }
    // });
    // result=await result.json();
    // console.log(result);

    //   setuseCredential(true)
       
  
        
        // navigate("/startpage")

        const response = await axios.post("http://localhost:3000/addArt", {name,price ,category, user_file : image}, {
        headers:{
          "Content-Type" : "multipart/form-data"
        }
        })

        console.log(response)
        
    };

    return(
        <>
       
                      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
         Add Arts
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name of Arts"
              name="name"
              autoComplete="arts"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="price"
              type="price"
              id="price"
              autoComplete="price"
            />
              
            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="category"
              type="category"
              id="category"
              autoComplete="category"
            />
              
            <TextField
              margin="normal"
              required
              fullWidth
              name="uid"
              label="uid"
              type="uid"
              id="uid"
              autoComplete="uid"
            />
             <input
                            title=""
                            placeholder="Choose Image"
                            type="file"
                            accept="image/*"
                            name="image" // Set the name attribute to "image" to match the formData key
                        />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Add
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
                  
                 
        </>
    )
}