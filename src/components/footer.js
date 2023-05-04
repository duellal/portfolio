import React from "react";
import {
    Nav, 
    NavItem,
    Navbar } from "reactstrap";

//Footer Styles:
import "../styles/css/footer.css"

//Resume PDF:
import pdf from '../static/resume.pdf'

export default function Footer(){ 
    return (
        <footer>
            <div>
                <a href="https://github.com/duellal/portfolio" target="_blank" rel="noreferrer">
                    Designed and built by Alexandria Duell
                </a>
                <p>
                    with inspiration from {' '}
                    <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer"> 
                        Brittany Chiang
                    </a>
                    {' '} and {' '}
                    <a href="https://master--dainty-gingersnap-5fbbe4.netlify.app" target="_blank" rel="noreferrer"> 
                        Jessica Duell
                    </a>
                </p>
            </div>
            
             <Navbar>
                <Nav tabs fill>
                    <NavItem onClick={() => {window.open('https://github.com/duellal')}}>
                            Github
                    </NavItem>
                    <NavItem onClick={() => {window.open('https://www.linkedin.com/in/alexandria-duell')}}>
                            LinkedIn
                    </NavItem>
                    <NavItem onClick={() => {window.open(pdf)}}>
                            Resume
                    </NavItem>
                    <NavItem onClick={() => {window.open('mailto:aduellswe@gmail.com')}}>
                            Contact
                    </NavItem>
                </Nav>
            </Navbar>

            <div className="copyright">
                <p>
                &copy; Alexandria Duell
                </p>
            </div>
        </footer>
       
    )
}