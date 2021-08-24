import React, { useState } from 'react'
import './About.css'
import AboutComponent from './AboutComponent'
import PurposeComponents from './PurposeComponents'
import StroyComponents from './StroyComponents'
function About() {
    const [about, setAbout] = useState(true)
    const [story, setStory] = useState(false)
    const [purpose, setPurpose] = useState(false)
    const HandleAbout = () => {
        setAbout(true)
        setStory(false)
        setPurpose(false)
    }
    const HandleStory = () => {
        setAbout(false)
        setStory(true)
        setPurpose(false)
    }
    const HandlePurpose = () => {
        setAbout(false)
        setStory(false)
        setPurpose(true)
    }

    const handleSmallScreen = () => {
        document.querySelector('.image').style.display = "none";
        document.querySelector('.about__left').style.display = "block"
        document.querySelector('.about__sidebar').style.display = "block"
        document.querySelector('.about__show').style.display = "none"
        document.querySelector('.img__text').style.display = "none"


    }

    return (
        <div className="about">

            <div className="about__sidebar">
                <p onClick={HandleAbout} className={`${about && 'open__about'}`}>About</p>
                <p onClick={HandleStory} className={`${story && 'open__about'}`}>Story</p>
                <p onClick={HandlePurpose} className={`${purpose && 'open__about'}`}>Purpose</p>
            </div>

            <div className="about__left">

                {about && <AboutComponent />}
                {story && <StroyComponents />}
                {purpose && <PurposeComponents />}
            </div>

            <div className="about__right">
                <img src="images/me.jpeg" alt="" className="image" />
                <div className="about__show" onClick={handleSmallScreen}></div>
                <h6 className="img__text">Enter</h6>
            </div>

        </div>
    )
}

export default About
