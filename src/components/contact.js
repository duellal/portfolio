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
                <button className="email-btn">
                    <a href="mailto:aduellswe@gmail.com" rel=" noreferrer" target="_blank">
                            Contact Me
                    </a>
                </button>
            </div>
        </div>
    )
}