import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

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
                    with inspiration from
                    <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer"> 
                        Brittany Chiang
                    </a>
                    and
                    <a href="https://master--dainty-gingersnap-5fbbe4.netlify.app" target="_blank" rel="noreferrer"> 
                        Jessica Duell
                    </a>
                </p>
            </div>
            
             <Navbar>
                <Nav tabs fill>
                    <NavItem>
                        <a href="https://github.com/duellal" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="https://www.linkedin.com/in/alexandria-duell" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href={pdf} target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="mailto:aduellswe@gmail.com" rel=" noreferrer" target="_blank">
                            Contact
                        </a>
                    </NavItem>
                </Nav>
            </Navbar>

            <div>
                <p>
                &copy; Alexandria Duell
                </p>
            </div>
        </footer>
       
    )
}