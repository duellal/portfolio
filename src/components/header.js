/* eslint-disable react/prop-types */

import React from "react";
import { NavLink } from "react-router-dom";
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
        <header id="header">
            <div className="logoDiv">
                <img className="logo" alt="AED Logo" src="favicon.ico"/>
            </div>
            <Navbar>
                <Nav tabs fill>
                    <NavItem className="home">
                        <NavLink to="/" onClick={() => scrollToElem("title")}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className="about">
                        <NavLink to="#about" onClick={() => scrollToElem("about")}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className="projects" >
                        <NavLink to="#projects" onClick={() => scrollToElem("projects")}>
                            Projects
                        </NavLink>
                    </NavItem>
                    {/* 
                    Doing this wehn I have time after rest of portfolio is complete:
                    
                    <NavItem className="experience">
                        <NavLink to="#experience">
                            Experience
                        </NavLink>
                    </NavItem> 
                    */}
                    <NavItem className="contact" >
                        <NavLink to="#contact" onClick={() => scrollToElem("contact")}>
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem className="resume">
                        <a href={pdf} target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}