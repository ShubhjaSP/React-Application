import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../Redux/action';
import { useState } from 'react';
import icon from "../../Images/icon.png"

export default function MenuAppBar() {

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [searchText, setSearchText] = useState('');

  //****************************************************** */

  // const [visibleLeft, setVisibleLeft] = useState(false);
  // const userToken=sessionStorage.getItem("myToken");
  const navigate=useNavigate();
  const updateLoginState=useDispatch();

  const logoutHandler=()=>{
   localStorage.removeItem("token");
    const loginPayload={
      login:false
  }
  updateLoginState({type:LOGOUT, payload:loginPayload});

    navigate("/startpage")
    
  }


    //****************************************************** */
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth1=localStorage.getItem('token');
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static"  sx={{ backgroundColor: '#dee2e6	' }}>
        
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
           
            <Typography><img src={icon} alt='icon' className='logo'/></Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/startpage"><Button>ArtPage</Button></Link>
            <Link to="/about"><Button>About</Button></Link>
            <Link to="/contact"><Button>Contact</Button></Link>
            <Link to="/nodejs"><Button>Node Comp</Button></Link>
            <Link to="/cardlist"><Button>ItemList</Button></Link>
            <Link to="/product"><Button>CartList</Button></Link>
           
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick1}
      >
        Updates of Arts.
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <MenuItem> <Link to="/paintings"><Button>Add Art</Button></Link></MenuItem> 
       <MenuItem>    <Link to="/paintings"><Button>Delete Art</Button></Link></MenuItem> 
       <MenuItem>    <Link to="/nodejs"><Button>Display Arts</Button></Link></MenuItem> 
       <MenuItem>    <Link to="/paintings"><Button>Child-Arts</Button></Link></MenuItem> 
      </Menu>

          </Typography>
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            sx={{ mr: 2, backgroundColor: 'white', borderRadius: 1 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ color: 'black' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {auth1 ? <MenuItem>  <Link to="/startpage" onClick={logoutHandler}><Button>Logout</Button></Link></MenuItem> 
                       :  
                         <MenuItem>    <Link to="/login"><Button>Login</Button></Link> 
                             <Link to="/signup"><Button>SignUp</Button></Link></MenuItem>  }
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
