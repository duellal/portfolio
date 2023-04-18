import React from "react";
import { Link } from "react-router-dom";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

//Resume PDF:
import pdf from '../static/resume.pdf'

export default function Header(){
    return (
        <header>
            <img className="logo" alt="AED Logo" src="favicon.ico"/>
            <Navbar>
                <Nav tabs fill>
                    <NavItem>
                        <Link to="/">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#projects">
                            Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#experience">
                            Experience
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#contact">
                            Contact
                        </Link>
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