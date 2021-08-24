import React from 'react'
import './Banner.css'

function Banner() {

    return (
        <div className="banner">
            <div className="about__portfolio">
                My Portfolio
                <br />
                I Build Things for Web

                <div className="mail__send">
                    <a className="get__btn" target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=johnbabu021@gmail.com">Get In Touch</a>
                    <button className="get__btn resume">
                        Resume
                    </button>

                </div>
            </div>


        </div>
    )
}

export default Banner
