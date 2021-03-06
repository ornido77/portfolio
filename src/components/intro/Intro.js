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
          <img src="assets/avatar.png" alt="Avatar" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sonny Ornido</h1>
          <p>A fresh grad. BSIT student from Valenzuela City.</p>
          <p>I like to work with Python, JavaScript and React.</p>
          <p>Knowledge in C++, Java and Laravel.</p>
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
