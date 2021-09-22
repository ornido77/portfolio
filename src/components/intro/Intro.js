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
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p173x172/242600759_1229861534155269_4153491723792350973_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFyrXrkItn--vDGat24ctDsChakBhqtlkIKFqQGGq2WQly27lknzpFvFoO2G4JBZ9ymg76yPW_3hutFPaLmHyKl&_nc_ohc=QF8IXxP1IzsAX_3o8J1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9f1bb33b7288e7092f2cb1cbc0c4043d&oe=6170CDAC"
            alt="Avatar"
          />
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
