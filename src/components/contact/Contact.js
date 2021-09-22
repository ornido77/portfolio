import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [message, setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hta781o",
        "template_227pxpe",
        e.target,
        "user_2W2NGJj2rrtbJYr49q67n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you, I will reply soon.</span>}
          <span></span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
