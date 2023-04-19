/* eslint-disable react/prop-types */

import React from "react"

//Projects Styles:
import "../styles/css/projects.css"

//Project Images:
import charRandomPic from "../static/images/char-random-pic.jpeg"
import austinShelterPic from "../static/images/austin-animal-shelter-pic.webp"
import gitHub from "../static/images/gitHub/github-mark.png"

export default function Projects(){
    return(
        <section id="projects">
            <h3>
                Past and Current Projects
            </h3>
            <div className="char-random-div">
                <h2>
                <a href="https://character-randomizer.netlify.app/character-randomizer" target="_blank" rel="noreferrer">
                    Character Randomization Website
                </a>
                </h2>
                <img src={charRandomPic} className="char-random-pic" loading="lazy" alt="Various different possible headshots of non-player characters (NPCs) drawn and colored" />
                <p className="img-text">
                    Picture from 
                    <a href="https://thenerdd.com/2021/01/15/7-steps-to-make-a-dd-npc" target="_blank" rel="noreferrer">
                        thenerdd.com
                    </a>
               </p>
                <div className="char-p-div">
                    <p>
                        A website built to help game masters and players create D&D characters either randomly, partially randomly, or to create a reference for their characters.
                    </p>
                    <p>
                        It is currently partially complete as I was working on this massive project while I was learning code in order to practice what I had learned.
                    </p>
                </div>
                <a href="https://github.com/Character-Randomizer" target="_blank" rel="noreferrer">
                    <img src={gitHub} />
                </a>
            </div>
            <div className="animal-shelter-div">
                <h2>
                    <a href="https://medium.com/@alexandriaduell/euthanization-at-the-austin-animal-center-are-they-a-no-kill-shelter-a6a00422406d" target="_blank" rel="noreferrer">
                        Austin Animal Shelter Analysis
                    </a>
                </h2>
                <img src={austinShelterPic} className="shelter-pic" loading="lazy" alt="Golden lab looking sad in a kennel" />
                <div className="shelter-p-div">
                    <p>
                        I analyzed Austin Animal Shelter&apos;s claim of being a no-kill shelter based off of data found by the 
                        <a href="https://data.austintexas.gov/" target="_blank" rel="noreferrer">
                            Texas Government
                        </a>
                        . I made a 
                        <a href="https://medium.com/@alexandriaduell/euthanization-at-the-austin-animal-center-are-they-a-no-kill-shelter-a6a00422406d" target="_blank" rel="noreferrer">
                            Medium article
                        </a>
                        about my findings.
                    </p>
                    <p>
                        ** Based off of a project by Lambda school (now BloomTech).
                    </p>
                </div>
                <a href="https://github.com/duellal/DS-Unit-1-Build-Austin-Animal-Shelter" target="_blank" rel="noreferrer">
                    <img src={gitHub} />
                </a>
            </div>
        </section>
    )
}