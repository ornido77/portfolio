import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<div className="itemContainer item">
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
					<div className="itemContainer item">
						<Person className="icon" />
						<span>+6396 8533 0471</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger">
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
