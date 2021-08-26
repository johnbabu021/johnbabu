import { Button } from '@material-ui/core'
import React from 'react'
import './Contact.css'
import ScrollReveal from 'scrollreveal'
import messagesCol from '../../firebase'
import { useForm } from 'react-hook-form'
import { addDoc } from 'firebase/firestore/lite'

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const sendMessage = async ({ Name, From, Message }) => {
        try {
            await addDoc(messagesCol, {
                Name,
                From,
                Message
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
                    <form onSubmit={handleSubmit(sendMessage)}>
                        {errors.Name && <p className="error">Name field is required</p>}
                        <input placeholder="Enter your name" type="text"
                            {...register("Name", { required: true })}

                        />
                        {errors.From && <p className="error">From Field is Required</p>}
                        <input placeholder="Enter your Email" type="email"
                            {...register("From", { required: true })}
                        />
                        {errors.Message && <p className="error">Message field is required</p>}
                        <textarea placeholder="Enter your Message"
                            type="text"
                            {...register("Message", { required: true })}

                        ></textarea>
                        <Button type="submit" className="send__btn">SEND message</Button>

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
