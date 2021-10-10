import "./works.scss";
import { data } from "../../data.js";
import ComputerIcon from "@material-ui/icons/Computer";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

export default function Works() {
	const [project, setProject] = useState(0);

	const handleClick = (way) => {
		way === "left"
			? setProject(project > 0 ? project - 1 : 3)
			: setProject(project < data.length - 1 ? project + 1 : 0);
	};

	return (
		<div className="works">
			<div className="title">
				<h1>My Personal Projects</h1>
			</div>
			<div className="content">
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
