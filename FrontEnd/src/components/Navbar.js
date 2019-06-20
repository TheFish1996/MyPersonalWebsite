import React, {useState, useEffect} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Fade
  } from "reactstrap";
import {Link} from 'react-router-dom'

  function NavBar(props){

    const [isOpen, setNavbarCollapse] = useState(false)
    const [isActive, setIsActive] = useState("")
    const {classDefinition} = props

    useEffect(() => {
      setIsActive(props.pageName)
    })

    function toggle() {
      setNavbarCollapse(!isOpen)
    }

      return (
        <div>
          <Navbar className={classDefinition} fixed="top" dark expand="md">
            <NavbarBrand href="/" className="navbarTitle mr-auto"><span className="navbarTitle">Jonathan Fishkin</span></NavbarBrand>
            <NavbarToggler href="/" onClick={toggle} />
            <Collapse className={isOpen && "blackMaskNavbar"} isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="ml-auto">
                  <NavLink active={isActive === "Home" && true} href="/">Home</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink active={isActive === "About Me" && true} href="/aboutme">About Me</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink active={isActive === "Projects" && true} href="/projectspage">Projects</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink active={isActive === "Job Experience" && true}>Job Experience</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
  }

  export default NavBar;