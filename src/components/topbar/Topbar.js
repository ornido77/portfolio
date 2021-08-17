import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';


function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+6396 8533 0471</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>sonnyornido0</span>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <a href="https://github.com/ornido77" target="_blank" rel="noreferrer">ornido77</a>
                    </div>
                    <div className="itemContainer">
                        <FacebookIcon className="icon" />
                        <a href="https://www.facebook.com/sonnyornido35" target="_blank" rel="noreferrer">sonnyornido35</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
