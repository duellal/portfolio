/* eslint-disable react/prop-types */
import React from "react";

//About Styles:
import "../styles/css/about.css"
//profile pic
import headshot from "../static/images/portfolio-pic.jpeg"

export default function About(){

    return (
        <section id="about">
            <h3>About Alex</h3>

            <div className="about-text-pic">
                <div className="text">
                    <p className="about-text">
                        Hey there! My name is Alex and I enjoy designing, creating, and implementing applications. I have always been interested in learning coding languages, but did not pursue it until the end of 2020. 
                    </p>
                    <p className="about-text">
                        I originally got a degree in Mathematics and Elementary Education at Grand Valley State University. I had quite a turbulent experience in the education field. My sister, who also changed careers into the technology field, told me that I should try to learn code. She told me that I would really enjoy it, especially with my mathematics background. 
                    </p>
                    <p className="about-text">
                        I refined my programming skills through online courses and self-teaching with the support of my sister. Over the course of the past year, I went from a basic understanding of programming to building a {' '}
                        <a href="https://github.com/Character-Randomizer"target="_blank" rel="noreferrer"> 
                            react web application from scratch
                        </a>
                        . I have worked on a variety of Agile teams to deliver a digital products under tight deadlines.
                    </p>
                    <p className="about-text">
                        My first job was at {' '}
                        <a href="https://www.storysquad.education/" target="_blank" rel="noreferrer">
                            Story Squad
                        </a>
                        . I loved the collaboration and ideas that formed into a product that will help children grow and improve in their reading, writing, and drawing skills. 
                    </p>
                    <p className="about-text">
                        Currently I work at {' '}
                        <a href="https://www.schwaaweb.com/" target="_blank" rel="noreferrer">
                            SchwaaWeb
                        </a>
                        . We are building a product that will help people to interact with the outside world more. We are doing this by integrating chatGPT and notifications to help remind people of doing simple things that will improve their quality of life.
                    </p>
                    <p className="about-text">
                        I look forward to all the projects that I will be a part of. I know there are a lot of projects that I can work on with my various interests; such as science, education, helping combat humanity&apos;s role in climate change, gaming (both board games and virtual ones), and the arts. I am open to any opportunity that can help me expand my skill set and knowledge in the field. 
                    </p>
                </div>
                <img className="about-pic" src={headshot} alt="Picture of Alex"  loading="lazy"/>
            </div>
        </section>
    )
}