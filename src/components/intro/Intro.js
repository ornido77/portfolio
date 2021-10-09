import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

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
		<div className="intro" id="intro">
			<div className="left">
				<div className="avatar">
					<img
						src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p173x172/242600759_1229861534155269_4153491723792350973_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFyrXrkItn--vDGat24ctDsChakBhqtlkIKFqQGGq2WQly27lknzpFvFoO2G4JBZ9ymg76yPW_3hutFPaLmHyKl&_nc_ohc=eK8Yuwgq0J0AX-IIS3N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0a65c547253d7a091c6ba492a31c353b&oe=618888AC"
						alt="Avatar"
					/>
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I am</h2>
					<h1>Sonny Ornido</h1>
					<p>I design and develop webisites of all sizes,</p>
					<p>specializing in front end development.</p>
					<p>I will build a responsive and modern designed </p>
					<p>blog, e-commerce or any website for you. </p>
					<h3>
						<span ref={textRef}></span>
					</h3>
				</div>
				<a href="#portfolio">
					<KeyboardArrowDown className="arrow" />
				</a>
			</div>
		</div>
	);
}

export default Intro;
