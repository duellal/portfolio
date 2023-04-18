import React from "react";
//profile pic
import headshot from "../static/images/portfolio-pic.jpeg"

export default function About(){

    return (
        <section id="about">
            <h2>About Alex</h2>

            <div className="about-text-pic">
                <p className="about-text">
                    Text goes here.
                </p>
                <img className="about-pic" src={headshot} alt="Picture of Alex"  loading="lazy"/>
            </div>
        </section>
    )
}