import "./portfolio.scss"

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
                        <img src="assets/js.png" alt="" />
                        <h3>Javascript Cuurse</h3>
                    </div>
                    <div className="item">
                        <img src="assets/rpsgame.png" alt="" />
                        <h3>RPS Game</h3>
                    </div>
                    <div className="item">
                        <img src="assets/portfolio.png" alt="" />
                        <h3>My Portfolio Website</h3>
                    </div>
            </div>
        </div>
    )
}
