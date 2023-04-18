import React from "react";
import { NavLink } from 'react-router-dom'
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
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/#about">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/#projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/#experience">
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/#contact">
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