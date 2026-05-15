/* eslint-disable react/prop-types */
import React from "react";

//Title Styles:
import "../styles/css/title.css"

export default function Title() {

    return (
        <section id="title">
            <div className="name">
                <h1>
                    Alexandria Duell
                </h1>
            </div>

            <div className="career">
                <h2>
                    Software Engineer
                </h2>
            </div>

            <div className="sm-blurb">
                <p>
                    Specializes in web application and database development while embracing opportunities to learn new technologies and encourage new ways of thinking.
                </p>
            </div>
        </section>
    )
}