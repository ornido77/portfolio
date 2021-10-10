import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, LocationOnRounded } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

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
			<div className="top">
				<div className="left">
					<div className="itemContainer">
						<h1>Let's talk about your project.</h1>
						<div className="item">
							<Phone
								className="logo"
								style={{ color: "#212d5e" }}
							/>
							<span>+63968 533 0471</span>
						</div>
						<div className="item">
							<Mail
								className="logo"
								style={{ color: "#34a853" }}
							/>
							<span>sonnyornido0@gmail.com</span>
						</div>
						<div className="item">
							<LocationOnRounded
								className="logo"
								style={{ color: "#960a0a" }}
							/>
							<span>
								#343 Bagong Nayon St., Bagbaguin, Valenzuela
								City
							</span>
						</div>
						<div className="socMedIcon">
							<a
								href="https://www.facebook.com/sonnyornido35"
								target="_blank"
								rel="noreferrer"
							>
								<FacebookIcon
									className="logo"
									style={{ color: "#3b5998" }}
								/>
							</a>
							<a
								href="https://www.facebook.com/sonnyornido35"
								target="_blank"
								rel="noreferrer"
							>
								<GitHubIcon
									className="logo"
									style={{ color: "#7dbbe6" }}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="contactForm">
						<h2>Contact.</h2>
						<form onSubmit={sendEmail}>
							<input type="text" placeholder="Name" name="name" />
							<input
								type="email"
								placeholder="Email"
								name="email"
							/>
							<input
								type="text"
								placeholder="Subject"
								name="subject"
							/>
							<textarea
								placeholder="message"
								name="message"
							></textarea>
							<button type="submit">Send</button>
							{message && (
								<span>Thank you, I will reply soon.</span>
							)}
							<span></span>
						</form>
					</div>
				</div>
			</div>
			<div className="bot"></div>
		</div>
	);
}

export default Contact;
