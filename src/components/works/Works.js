import "./works.scss";
import ComputerIcon from "@material-ui/icons/Computer";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useState } from "react";

export default function Works() {
  const [project, setProject] = useState(0);

  const data = [
    {
      id: "1",
      title: "Line Queueing System",
      desc: "A cross platform desktop application built using PyQt5 for our thesis project. Designed using QtDesigner and pure Python Backend development. It can print ticket numbers that will be shown on a monitor",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/242492742_153373230247801_6020378223581422512_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEDewgfscT0tgHBs2lctZi-_lGJ8s3Q4Uj-UYnyzdDhSKiam8KGbL11dglqz7ZVrdPCCyJem3m2VAvnbOiSDv3H&_nc_ohc=nalBS38vsTgAX8puqZ9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a4c4138e385a7b5ecc3c90a661a43309&oe=616E9D9C",
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
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/242492742_153373230247801_6020378223581422512_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEDewgfscT0tgHBs2lctZi-_lGJ8s3Q4Uj-UYnyzdDhSKiam8KGbL11dglqz7ZVrdPCCyJem3m2VAvnbOiSDv3H&_nc_ohc=nalBS38vsTgAX8puqZ9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a4c4138e385a7b5ecc3c90a661a43309&oe=616E9D9C",
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
          href="https://github.com/ornido77/portfolio"
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
        <a
          href="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/242253052_983227425860639_3212262037113698587_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFrlBHVfXMrMcT5vvX8ds_JP2brlLtWw3I_ZuuUu1bDcnnn9oaosj3EU2VWlbMDhwIirqm-X5foB_Cpd1YJdBiu&_nc_ohc=rXab2A-ykIQAX-4vMYJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=6e9827a2aaca3416ee68e72fe0c38db8&oe=617037E9"
          target="_blank"
          rel="noreferrer"
        >
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
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/242562772_2320924431375938_8287196356178504579_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGRgu7d3i5zqfv5VtOr77xG4McVCM4_hTDgxxUIzj-FMAQG2IShkz5loUlJzt3i_kAn5CZrgJ4DkID10gjNEdmm&_nc_ohc=iKbysdpDfdkAX-6UIs_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4a06e97680e4b8a62cd56b45eb02b4b0&oe=616E8F16",
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
      <img
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
