import React, { useState } from 'react'
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import './SendMessage.css'
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import { addDoc } from 'firebase/firestore/lite'
import messagesCol from '../../firebase';
function SendMessage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [message, setMessage] = useState(false)
    const onSubmit = async ({ Name, Mail, Message }) => {
        setMessage(false)
        await addDoc(messagesCol, {
            Name,
            Mail,
            Message
        })
        document.querySelector(".name").value = ""
        document.querySelector(".name1").value = ""
        document.querySelector(".name2").value = ""


    }
    return (
        <div className="sendMessageIcon">
            {
                !message && <div className="close__icon">
                    <ContactSupportRoundedIcon onClick={() => setMessage(true)} />
                </div>
            }
            {
                message && <div className="message__box">
                    <CloseIcon onClick={() => setMessage(false)} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.Name && <p className="error">name is required</p>}
                        <input className="name" placeholder="Enter your name" type="text"

                            {...register("Name", { required: true })}
                        />
                        {errors.Name && <p className="error">message is required</p>}

                        <input placeholder="Enter your mail" type="email"
                            className="name1" {...register("Mail", { required: true })}
                        />
                        {errors.Name && <p className="error">message is required</p>}

                        <input className="name2" placeholder="Enter your message" type="text"
                            {...register("Message", { required: true })}
                        />
                        <Button className="send" type="submit" >send</Button>
                    </form>

                </div>
            }
        </div>
    )
}

export default SendMessage
