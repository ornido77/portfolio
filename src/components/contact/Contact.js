import "./contact.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useState } from "react";

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit = {handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Please contact me from the contact infos on the top bar.<p>This website is front end only.^_^</p></span>}
                    <span></span>
                </form>
                <div className="iconContainer">
                    <a href="https://github.com/ornido77" target="_blank" rel="noreferrer"><GitHubIcon className="icon"/></a>
                    <a href="https://www.facebook.com/sonnyornido35" target="_blank" rel="noreferrer"><FacebookIcon className="icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
