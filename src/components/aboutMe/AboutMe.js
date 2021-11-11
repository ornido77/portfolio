import "./aboutMe.scss";

function AboutMe() {
	return (
		<div className="about" id="aboutme">
			<div className="top">
				<div className="left">
					<h1>about me.</h1>
					<h4>
						I'm a Web Developer focusing on Front End Development
						from Valenzuela City.
					</h4>
					<p>
						I started programming in college learning C++ and Java
						in the first 2 years. And started learning Python in
						next 2 years. Before graduating I decided to create a
						web portfolio, and that is when I liked front end
						Development especially using React JS.
					</p>
					<p>
						I also like music, singing, cooking, photography,
						travelling, gaming, history and KDrama.
					</p>
				</div>
				<div className="right">
					<div className="imgContainer">
						<img src="assets/portrait.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className="bot">
				<div className="imgContainer">
					<img src="assets/left1.jpg" alt="" />
				</div>
				<div className="imgContainer">
					<img src="assets/left2.jpg" alt="" />
				</div>
				<div className="imgContainer">
					<img src="assets/center.jpg" alt="" />
				</div>
				<div className="imgContainer">
					<img src="right2/portrait.jpg" alt="" />
				</div>
				<div className="imgContainer">
					<img src="assets/right1.jpg" alt="" />
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
