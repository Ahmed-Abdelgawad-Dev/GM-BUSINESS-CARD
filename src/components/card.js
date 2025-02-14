import React from "react"
import Headshot from "../images/gelil.png"
import Mail from "../images/mail.png"
import Linkedin from "../images/linkedin.png"
import About from "./about"
import Footer from "./footer"


function Card() {
    return (
        <div className="info">
            <img src={Headshot} alt="headshot" />
            <h1>Mohamed Abdel Gelil</h1>
            <div className="job-title">General Manager</div>
            <div className="website">Il Mercato Hotel, Aqua Park & Alley Shopping Promenade</div>
            <div className="buttons">
                {/* <button id="email"><img src={Mail} alt="mail"></img>Email</button>
                <button id="linkedin"><img src={Linkedin} alt="linkedin"></img>LinkedIn</button> */}
            </div>

            <About />
            <Footer />
        </div>
    )
}

export default Card