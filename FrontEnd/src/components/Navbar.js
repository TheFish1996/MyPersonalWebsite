import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Fade
  } from "reactstrap";
import {Link} from 'react-router-dom'

  function NavBar(props){

    const [isOpen, setNavbarCollapse] = useState(false)

    function toggle() {
      setNavbarCollapse(!isOpen)
    }

      return (
        <div className="fadeIn">
          <Navbar fixed="top" dark expand="md">
            <NavbarBrand href="/" className="navbarTitle mr-auto"><span className="navbarTitle">Jonathan Fishkin</span></NavbarBrand>
            <NavbarToggler href="/" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="ml-auto">
                  <NavLink>Home</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink>Projects</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink>Technical Skills</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink>Job Experience</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
  }

  export default NavBar;