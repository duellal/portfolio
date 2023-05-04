/* eslint-disable react/prop-types */
import React from "react"

//Contact Styles:
import "../styles/css/contact.css"

export default function Contact(){

    return (
        <div id="contact">
            <h3> Get in Touch with Alex! </h3>
            <div>
                <p>
                    Feel free to contact me with any questions or job opportunities.
                </p>

                <a href="mailto:aduellswe@gmail.com" rel=" noreferrer" target="_blank">
                    <button className="email-btn">
                        Contact Me
                    </button>
                </a>
            </div>
        </div>
    )
}