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
                    Feel free to email me with any questions or job opportunities.
                </p>

                <div className="btn-div">
                    <button className="email-btn" onClick={() => { window.open(`mailto:aduellswe@gmail.com`) }}>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    )
}