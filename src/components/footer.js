import React from "react";
import {
    Nav, 
    NavItem,
    NavLink, 
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
                        <NavLink href="https://github.com/duellal">
                            Github
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/alexandria-duell" target="_blank" rel="noreferrer">
                            LinkedIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={pdf} target="_blank" rel="noreferrer">
                            Resume
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:aduellswe@gmail.com" rel=" noreferrer" target="_blank">
                            Contact
                        </NavLink>
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