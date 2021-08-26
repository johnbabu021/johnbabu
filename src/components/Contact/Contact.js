import { Button } from '@material-ui/core'
import React from 'react'
import './Contact.css'
import ScrollReveal from 'scrollreveal'
import messagesCol from '../../firebase'
import { addDoc } from 'firebase/firestore/lite'
function Contact() {
    const sendMessage = async () => {
        try {
            await addDoc(messagesCol, {
                name: "jin-yang"
            })
        }
        catch (e) {
        }
    }
    var slideLeft = {
        origin: 'top',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '120px',
        duration: 1000,
        delay: 100,
        reset: false,

    };
    ScrollReveal().reveal('.contact', slideLeft)
    return (
        <div className="contact">
            <div className="contact__left">
                <h1>Contact Me</h1>
                <div className="contact__page">
                    <form>
                        <input placeholder="Enter your name" />
                        <input placeholder="Enter your Email" />
                        <textarea placeholder="Enter your Message"></textarea>
                        <Button className="send__btn" onClick={sendMessage}>SEND message</Button>

                    </form>
                </div>
            </div>
            <div className="contact__right">
                <img src="images/mobile.svg" alt=""></img>

            </div>
        </div>
    )
}

export default Contact
