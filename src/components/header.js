/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

//Resume PDF:
import pdf from '../static/resume.pdf'

//Header Styles:
import "../styles/css/header.css"

export default function Header(){
    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView()
    }

    return (
        <header>
            <div className="logoDiv">
                <img className="logo" alt="AED Logo" src="favicon.ico"/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => scrollToElem("title")}>
                            Home
                    </NavItem>
                    <NavItem className="about" onClick={() => scrollToElem("about")}>
                            About
                    </NavItem>
                    <NavItem className="projects" onClick={() => scrollToElem("projects")}>
                            Projects
                    </NavItem>
                    {/* 
                    Doing this when I have time after portfolio is complete:
                    
                    <NavItem className="experience">
                        <NavLink to="#experience">
                            Experience
                        </NavLink>
                    </NavItem> 
                    */}
                    <NavItem className="contact" onClick={() => scrollToElem("contact")}>
                            Contact
                    </NavItem>
                    <NavItem className="resume" onClick={() => { window.open(pdf) }}>
                            Resume
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}