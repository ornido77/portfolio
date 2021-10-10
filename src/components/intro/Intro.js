import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Person, Mail } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			backDelay: 2000,
			showCursor: true,
			strings: ["BSIT Graduate", "Software Developer", "UI Designer"],
		});
	}, []);
	return (
		<div className="intro">
			<div className="top">
				<div className="wrapper">
					<div className="topbar">
						<div className="itemContainer ">
							<Mail className="icon" />
							<span>sonnyornido0@gmail.com</span>
						</div>
						<div className="itemContainer">
							<a
								href="https://github.com/ornido77"
								target="_blank"
								rel="noreferrer"
							>
								<GitHubIcon className="icon" />
								<span>ornido77</span>
							</a>
						</div>
						<div className="itemContainer">
							<a
								href="https://www.facebook.com/sonnyornido35"
								target="_blank"
								rel="noreferrer"
							>
								<FacebookIcon className="icon" />
								<span>sonnyornido35</span>
							</a>
						</div>
						<div className="itemContainer ">
							<Person className="icon" />
							<span>+6396 8533 0471</span>
						</div>
					</div>
				</div>
			</div>
			<div className="bot">
				<div className="left">
					<div className="avatar">
						<img src="assets/avatar.png" alt="Avatar" />
					</div>
				</div>
				<div className="right">
					<div className="wrapper">
						<h2>Hi There, I am</h2>
						<h1>Sonny Ornido</h1>
						<p>I design and develop website of all sizes,</p>
						<p>specializing in front end development.</p>
						<p>I will build a responsive and modern designed </p>
						<p>blog, e-commerce or any website for you. </p>
						<h3>
							<span ref={textRef}></span>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
