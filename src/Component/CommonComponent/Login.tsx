




import axios from 'axios';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../Redux/action";
import { LOGIN_ENDPOINT } from "../../Api/ServerConfigration";
import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

interface FormErrors {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const updateLoginState = useDispatch();
  const [errors, setErrors] = useState<FormErrors>({ email: '', password: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    console.log({
      email: email,
      password: password
    });

    if (!isValidEmail(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address' }));
      return;
    }

    if (!password) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Please enter your password' }));
      return;
    }

    setErrors({ email: '', password: '' });

    try {
      const response = await axios.post(LOGIN_ENDPOINT, { email, password });
      console.log("Res from backend-->", response);
      const { data } = response;
      
      if (data && data.user1 && data.auth) {
        localStorage.setItem("user", JSON.stringify(data.user1));
        localStorage.setItem("token", data.auth);

        console.log("Email From Backend", data.user1.email);
        const loginPayload = {
          login: true
        }
        updateLoginState({ type: LOGIN, payload: loginPayload });
        navigate("/startpage");
      } else {
        alert("Invalid response from server.");
      }
    } catch (error) {
      console.log("Error from backend-->", error);
      alert("Not Valid User. Please Sign In First.");
    }
  };

  return (
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
           <Paper
            elevation={3}  sx={{
              padding: 4,}}>
          <Avatar sx={{ ml: 18, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgetpassword" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Paper>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default Login;
