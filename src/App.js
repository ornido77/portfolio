import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
	return (
		<div className="App">
			<Intro />
			<AboutMe />
			<Works />
			<Contact />
		</div>
	);
}

export default App;
