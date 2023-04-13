import React from "react";
import { NavLink } from 'react-router-dom'
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

const Header = () => {
    return (
        <header>
            {/* <img className="logo"/> */}
            <Navbar>
                <Nav pills fill>
                    <NavItem>
                        <NavLink href="#about">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#experience">
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header