import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        <div className="item">
          <img src="assets/line.png" alt="" />
          <h3>Line Queueing System</h3>
        </div>
        <div className="item">
          <img src="assets/amazon.png" alt="" />
          <h3>Amazon Clone</h3>
        </div>
        <div className="item">
          <img src="assets/rpsgame.png" alt="" />
          <h3>
            <a
              href="https://ornido77.github.io/RPS-Game/"
              target="_blank"
              rel="noreferrer"
            >
              RPS Game
            </a>
          </h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>
            <a
              href="https://ornido77.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              My Portfolio Website
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
