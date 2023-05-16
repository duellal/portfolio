/* eslint-disable react/prop-types */
import React from "react";

//Title Styles:
import "../styles/css/title.css"

export default function Title(){
    
    return (
        <section id="title"> 
            <div className="name">
                <p>
                    Hi, my name is ...
                </p>
                <h1>
                    Alexandria Duell
                </h1>
            </div>
            <div className="career">
            <p>
             I&apos;m a ...
            </p>
            <h2>
                Software Engineer
            </h2>
            </div>
            <div className="sm-blurb">
                <p>
                    I specialize in creating web applications and building databases. I enjoy projects that keep me on my toes. Currently, I am working at Story Squad and updating the {' '}
                    <a href="https://character-randomizer.netlify.app/" target="new">
                        Character Randomization project.
                    </a>
                </p>
            </div>
        </section>
    )
}