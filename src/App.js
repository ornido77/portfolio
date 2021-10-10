import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
	return (
		<div className="App">
			<Topbar classname="top" />
			<div className="sections">
				<Intro />
				<AboutMe />
				<Works />
				<Contact />
			</div>
		</div>
	);
}

export default App;
