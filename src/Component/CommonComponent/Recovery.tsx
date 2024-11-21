import React from 'react';
import { useFormik } from 'formik';
import { passwordValidate } from '../Helper/validate';
import { Toaster } from 'react-hot-toast';

// MUI Components
import { Box, Button, Container, Grid, TextField, Typography, Paper } from '@mui/material';

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    // validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="sm" sx={{  marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', }}>
      <Toaster position="top-center" reverseOrder={false} />
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
        <Box textAlign="center">
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            Recovery
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4 }}>
            Please enter the OTP to recover your password.
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {/* OTP Input */}
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                Enter the 6-digit OTP sent to your email address:
              </Typography>
              <TextField
                fullWidth
                id="otp"
                name="otp"
                label="OTP"
                variant="outlined"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Recover
              </Button>
            </Grid>

            {/* Resend OTP */}
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2" color="textSecondary">
                Can't get OTP?{' '}
                <Button variant="text" color="error" onClick={() => console.log('Resend OTP')}>
                  Resend
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
