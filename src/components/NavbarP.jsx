import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/GeneralStyles.css";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionRegister";


const NavbarP = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar className="" style={{backgroundColor: "#333", color:"#fff",fontWeight: "300", width: "100%" }}>
        <Container className="contNavbarP" >
            <Nav.Link href="/" className="optionsNavbar">
              <img src="https://darksky.net/images/darkskylogo.png" alt="Dark sky Logo" className="logo1"/> 
              <span style={{position: "relative", top: "3px"}}>Dark Sky by Apple</span>
              
            </Nav.Link>
            <Nav.Link href="/app" className="optionsNavbar">
              <img src="https://darksky.net/images/mobile-app-icon.png" alt="Smarthpone icon" className="iconSmartphone" />App
            </Nav.Link>
            <Nav.Link href="#maps" className="optionsNavbar">Maps</Nav.Link>
            <Nav.Link href="#darkskyapi" className="optionsNavbar">Dark Sky API</Nav.Link>
            <Nav.Link href="#help" className="optionsNavbar">Help</Nav.Link>
            <Nav.Link href="#home"className="optionsNavbar loginHidden"  onClick={() => dispatch(logoutAsync())}>Logout</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarP;
