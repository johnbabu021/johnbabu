import React from 'react'
import SendMessage from '../sendMessage/SendMessage'
import './Banner.css'

function Banner() {

    const pdfOpen = () => {
        window.open("/pdf/JohnBabu_React_js_Resume.pdf");
        return true
    }

    return (
        <div className="banner">
            <div className="about__portfolio">

                <div className="mail__send">
                    <a className="get__btn" target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=johnbabu021@gmail.com">Get In Touch</a>
                    <button className="get__btn resume" onClick={pdfOpen}>
                        Resume
                    </button>

                </div>
            </div>
            <div className="close__container" >
                <SendMessage />
            </div>

        </div>
    )
}

export default Banner
