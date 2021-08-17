import "./works.scss"
import ComputerIcon from '@material-ui/icons/Computer';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useState } from "react";

export default function Works() {

    const [project, setProject] = useState(0);

    const data= [
        {
            id: "1",
            title: "Line Queueing System",
            desc: "A cross platform desktop application built using PyQt5 for our thesis project.",
            img: "assets/line.png",
            type: "Thesis Project",
            credit: <a href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" 
                target="_blank" 
                rel="noreferrer">
                Tech With Tim
                </a>
        },
        {
            id: "2",
            title: "Javascript Course",
            desc: "A simple webpage containing javascript basic projects.",
            img: "assets/js.png",
            type: "Learning JavaScript",
            credit: <a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ" 
                target="_blank" 
                rel="noreferrer">
                Clever Programming
                </a>
        },
        {
            id: "3",
            title: "RPS Game",
            desc: "Rock, Paper, and Scissors javascript project.",
            img: "assets/rpsgame.png",
            type: "Learning JavaScript",
            credit: <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" 
                target="_blank" 
                rel="noreferrer">
                Freecodecamp.org
                </a>
        },
        {
            id: "4",
            title: "My Portfolio Website",
            desc: "This is my Portfolio Website",
            img: "assets/portfolio.png",
            type: "Web Portfolio Project",
            credit: <a href="https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg" 
                target="_blank" 
                rel="noreferrer">
                Lama Dev
                </a>
        }                                
    ]

    const handleClick = (way) => {
        way === "left" ? setProject(project > 0 ? project - 1 : 3)
        : setProject(project < data.length - 1 ? project + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" 
            style={{ transform: `translateX(-${project * 100}vw)`}}>
                {data.map((d) => (       
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <ComputerIcon className="img"/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <div className="YouTube">
                                        <div className="top">
                                            <h6>Credits to</h6>
                                        </div>
                                        <div className="bot">
                                            <div className="youTube">
                                                <YouTubeIcon/>
                                                <p>{d.credit}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span>{d.type}</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>   
                    </div>
                    ))}
            </div>
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" 
            className="arrow left" 
            alt="" 
            onClick={()=>handleClick("left")}
            />
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" 
            className="arrow right" 
            alt="" 
            onClick={()=>handleClick("right")}
            />
        </div>
    );
}
