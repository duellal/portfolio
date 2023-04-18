import React from "react";

export default function About(){

    return (
        <section id="about">
            <h2>About Alex</h2>

            <div className="about-text-pic">
                <p className="about-text">
                    Text goes here.
                </p>
                <img className="about-pic" alt="Picture of Alex" href="portfolio-pic.jpeg"/>
            </div>
        </section>
    )
}