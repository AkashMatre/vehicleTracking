import React, { Component } from "react";
import { Nav, NavItem, NavLink, Button, ButtonGroup } from "reactstrap";
import Logo from "../img/logo.jpg";
import "./Styled.css";
class Header extends Component {
  state = {};

  login=()=>{
    console.log("login")
  }

  signUp = () =>{
    console.log("signup")
  }
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <Nav>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ouroffers">Our Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">Contact US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/booknow">Book Now</NavLink>
            </NavItem>
          </Nav>
          <ButtonGroup>
            <Button color="primary" ><NavLink href="/login">Login</NavLink></Button>
            <Button color="primary"><NavLink href="/signup">Sign Up</NavLink></Button>
          </ButtonGroup>
        </header>
      </div>
    );
  }
}

export default Header;
