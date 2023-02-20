import React from "react";
import "./portfolio.scss";
import Avengers from "../../assets/photo1675320292.jpeg";
import Movie from "../../assets/0eac2e2c-5117-4069-843c-0618281a240a.png";

const MyPortfolio = () => {
  const myWorks = [
    {
      id: 1,
      img: Avengers,
      name: "Marvel Info App",
      url: "https://marvel-info-app-theta.vercel.app/",
    },
    {
      id: 2,
      img: Movie,
      name: "Movie App",
      url: "https://next-moviedb-app-nyzg.vercel.app/",
    },
    // { id: 3, img:'', url:'' },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <h2>PORTFOLIO</h2>
      <span>LATEST WORKS</span>
      <div className="portfolio__wrapper">
        <ul className="portfolio__list">
          {myWorks.map(({ id, img, url, name }) => (
            <li key={id} className="portfolio__list-item">
              <div className="portfolio__image-wrapper">
                <img
                  className="portfolio__image"
                  src={img}
                  alt="project-photo"
                />
              </div>
              <div className="portfolio__list-item">
                <div>
                  <a target="_blank" href={url}>
                    {name}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyPortfolio;
