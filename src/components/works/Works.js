import "./works.scss";
import ComputerIcon from "@material-ui/icons/Computer";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

export default function Works() {
	const [project, setProject] = useState(0);

	const data = [
		{
			id: "1",
			title: "Line Queueing System",
			desc: "A cross platform desktop application built using PyQt5 for our thesis project. Designed using QtDesigner and pure Python Backend development. It can print ticket numbers that will be shown on a monitor",
			img: "assets/line.png",
			type: "Python Project",
			credit: (
				<a
					href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg"
					target="_blank"
					rel="noreferrer"
				>
					Tech With Tim
				</a>
			),
			ghRepo: (
				<a
					href="https://github.com/ornido77/Line-Queuing-and-Ticketing-System"
					target="_blank"
					rel="noreferrer"
				>
					Click Here
				</a>
			),
		},
		{
			id: "2",
			title: "Amazon Clone App - Demo",
			desc: "An e-commerce app based on Amazon built using ReactJS and Firebase. Functionalities like, add to basket, checkout orders, user authentication etc..",
			img: "assets/amazon.png",
			type: "React Project",
			credit: (
				<a
					href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
					target="_blank"
					rel="noreferrer"
				>
					Clever Programming
				</a>
			),
			ghRepo: (
				<a
					href="https://github.com/ornido77/amazon-clone-app"
					target="_blank"
					rel="noreferrer"
				>
					Click Here
				</a>
			),
		},
		{
			id: "3",
			title: "RPS Game",
			desc: "Rock, Paper, and Scissors Game, a mini javascript project. Minimalistic design and with a live score shown",
			img: "assets/rpsgame.png",
			type: "JavaScript Project",
			credit: (
				<a href="assets/rpsgame.png" target="_blank" rel="noreferrer">
					Freecodecamp.org
				</a>
			),
			ghRepo: (
				<a
					href="https://github.com/ornido77/Javascript-Course"
					target="_blank"
					rel="noreferrer"
				>
					Click Here
				</a>
			),
		},
		{
			id: "4",
			title: "My Portfolio Website",
			desc: "This is my Portfolio Website built using React JS and SASS, deployed using GitHub Pages",
			img: "assets/portfolio.png",
			type: "React Project",
			credit: (
				<a
					href="https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg"
					target="_blank"
					rel="noreferrer"
				>
					Lama Dev
				</a>
			),
			ghRepo: (
				<a
					href="https://github.com/ornido77/portfolio"
					target="_blank"
					rel="noreferrer"
				>
					Click Here
				</a>
			),
		},
	];

	const handleClick = (way) => {
		way === "left"
			? setProject(project > 0 ? project - 1 : 3)
			: setProject(project < data.length - 1 ? project + 1 : 0);
	};

	return (
		<div className="works" id="works">
			<div className="top">
				<h1>My Personal Projects</h1>
			</div>
			<div className="bottom">
				<div
					className="slider"
					style={{ transform: `translateX(-${project * 100}vw)` }}
				>
					{data.map((d) => (
						<div key={d.id} className="container">
							<div className="item">
								<div className="left">
									<div className="leftContainer">
										<div className="imgContainer">
											<ComputerIcon className="img" />
										</div>
										<h2>{d.title}</h2>
										<span>{d.type}</span>
										<p>{d.desc}</p>
										<p>GitHub Repository {d.ghRepo}</p>
										<div className="YouTube">
											<div className="top">
												<h6>Credits to</h6>
											</div>
											<div className="bot">
												<div className="youTube">
													<YouTubeIcon />
													<p>{d.credit}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="right">
									<img src={d.img} alt="works" />
								</div>
							</div>
						</div>
					))}
				</div>
				<KeyboardArrowLeft
					src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
					className="arrow left"
					alt=""
					onClick={() => handleClick("left")}
				/>
				<KeyboardArrowRight
					src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
					className="arrow right"
					alt=""
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
}
