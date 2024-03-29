/* eslint-disable react/prop-types */
import React from "react"

//Projects Styles:
import "../styles/css/projects.css"

//Project Images:
import charRandomPic from "../static/images/char-random-pic.jpeg"
import austinShelterPic from "../static/images/austin-animal-shelter-pic.webp"
import gitHub from "../static/images/gitHub/github-mark-white.png"
import ticTacToeBoard from '../static/images/ticTacToeBoard.png'

export default function Projects(){
    return(
        <section id="projects">
            <h3>
                Open Source Projects
            </h3>
            <div className="project-div left">
                <h4 className="left-title">
                    <a href="https://aed-tic-tac-toe.netlify.app" target="new">
                        Tic Tac Toe
                    </a>
                </h4>
                <div className="text-box">
                    <div className="text-box border">
                        <img className="github left" src={gitHub} loading="lazy" onClick={() => {
                            window.open(`https://github.com/duellal/tic-tac-toe`)
                        }}/>
                        <div className="p-div left">
                            <p>
                                This <a href="https://aed-tic-tac-toe.netlify.app" target="new">
                                    project {' '}
                            </a> 
                                 a game of Tic-Tac-Toe with directions, a reset button, and a turn list. The turn list allows the players to go back to a previous turn and try another move. 
                            </p>
                            <p>
                                Once a button on the turn list gets pushed, the other turn buttons remain until a different square is selected for that turn. The players can also use the turn list to see the progression of the game they played. 
                            </p>
                        </div>
                    </div>
                </div>     
                <div className="pic">
                <img 
                    src={ticTacToeBoard} className="tictactoe pic" 
                    loading="lazy" alt="3 column by 3 row tic tac toe board; O wins"
                    onClick={() => {
                        window.open(`https://aed-tic-tac-toe.netlify.app`)
                    }}
                /> 
                 <p>
                        Picture from {' '}
                        <a href="https://www.pngwing.com/en/free-png-tbkhy" target="new">
                            pngwing.com
                        </a>
                    </p>        
                </div>
            </div>
            <div className="project-div right">
                <h4 className="right-title">
                <a href="https://character-randomizer.netlify.app" target="new">
                    Character Randomization Website
                </a>
                </h4>
                 <div className="pic">
                    <img src={charRandomPic} className="npc-pic" loading="lazy" alt="Various different possible headshots of non-player characters (NPCs) drawn and colored" />
                    <p>
                        Picture from {' '}
                        <a href="https://thenerdd.com/2021/01/15/7-steps-to-make-a-dd-npc" target="new">
                            thenerdd.com
                        </a>
                    </p>
                </div>
               <div className="text-box">
                    <div className="text-box border">
                        <div className="p-div right">
                            <p>
                                This <a href="https://character-randomizer.netlify.app" target="new">
                                    website {' '}
                                </a>
                                is being built to help game masters and players create D&D characters either randomly, partially randomly, or to create a reference for their characters.
                            </p>
                            <p>
                                It is partially complete as it is a massive project. I have continually gained knowledge and have grown as a software engineer throughout this project. 
                            </p>
                        </div>
                        <img className="github right" src={gitHub} onClick={() => {
                            window.open(`https://github.com/Character-Randomizer`)
                        }}/>
                    </div>
                </div>
            </div>
            <div className="project-div left">
                <h4 className="left-title">
                    <a href="https://medium.com/@alexandriaduell/euthanization-at-the-austin-animal-center-are-they-a-no-kill-shelter-a6a00422406d" target="new">
                        Austin Animal Shelter Analysis
                    </a>
                </h4>
                <div className="text-box">
                    <div className="text-box border">
                        <img className="github left" src={gitHub} loading="lazy" onClick={() => {
                            window.open(`https://github.com/duellal/DS-Unit-1-Build-Austin-Animal-Shelter`)
                        }}/>
                        <div className="p-div left">
                            <p>
                                I analyzed Austin Animal Shelter&apos;s claim of being a no-kill shelter based off of data found by the {' '}
                                <a href="https://data.austintexas.gov/" target="_blank" rel="noreferrer">
                                    Texas Government
                                </a>
                                . I made a {' '}
                                <a href="https://medium.com/@alexandriaduell/euthanization-at-the-austin-animal-center-are-they-a-no-kill-shelter-a6a00422406d" target="new">
                                    Medium article
                                </a>
                                {' '} about my findings.
                            </p>
                            <p>
                                ** Based off of a project by Lambda school (now BloomTech).
                            </p>
                        </div>
                    </div>
                </div>           
                <img src={austinShelterPic} className="pic" loading="lazy" alt="Golden lab looking sad in a kennel" />         
            </div>
        </section>
    )
}