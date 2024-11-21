import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from "@mui/material";
import { SmartButton } from "@mui/icons-material";
import { Sidebar } from 'primereact/sidebar';
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../Redux/action";


function Layout() {
  const [visibleLeft, setVisibleLeft] = useState(false);
  // const userToken=sessionStorage.getItem("myToken");
  const navigate=useNavigate();
  const updateLoginState=useDispatch();

  const logoutHandler=()=>{
    sessionStorage.removeItem("myToken");
    const loginPayload={
      login:false
  }
  updateLoginState({type:LOGOUT, payload:loginPayload});

    navigate("/startpage")
    
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
     
{/* <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
    Content
</Sidebar>

<Button  onClick={(e) => setVisibleLeft(true)}>Toggle</Button> */}
 


        <Navbar.Brand href="/startpage" >Art Museum</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
          <Link to="/startpage"><Button>ArtPage</Button></Link>
            <Link to="/about"><Button>About</Button></Link>
            <Link to="/contact"><Button>Contact</Button></Link>
            {/* <Link to="/layout1">Layout1</Link> */}
            <NavDropdown title="Types Of Arts" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Child Arts</NavDropdown.Item>
              <Link to="/paintings"><Button>Paintings</Button></Link>
              <NavDropdown.Item href="#action/3.3">Greetings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Quilings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          
            <Link to="/login"><Button>Login</Button></Link>
            <Link to="/startpage" onClick={logoutHandler}><Button>Logout</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;