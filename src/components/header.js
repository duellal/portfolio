/* eslint-disable react/prop-types */

import React from "react";
import { NavLink } from "react-router-dom";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

//Resume PDF:
import pdf from '../static/resume.pdf'

export default function Header(){
    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView()
    }

    return (
        <header>
            <img className="logo" alt="AED Logo" src="favicon.ico"/>
            <Navbar>
                <Nav tabs fill>
                    <NavItem>
                        <NavLink to="/" onClick={() => scrollToElem("/")}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#about" onClick={() => scrollToElem("about")}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#projects" onClick={() => scrollToElem("projects")}>
                            Projects
                        </NavLink>
                    </NavItem>
                    {/* 
                    Doing this wehn I have time after rest of portfolio is complete:
                    
                    <NavItem>
                        <NavLink to="#experience">
                            Experience
                        </NavLink>
                    </NavItem> 
                    */}
                    <NavItem>
                        <NavLink to="#contact" onClick={() => scrollToElem("contact")}>
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