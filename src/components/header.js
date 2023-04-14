import React from "react";
import { NavLink } from 'react-router-dom'
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

//Resume PDF:
import pdf from '../static/resume.pdf'

const Header = () => {
    return (
        <header>
            {/* <img className="logo"/> */}
            <Navbar>
                <Nav tabs fill>
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#about">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#experience">
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <a href={pdf} target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header