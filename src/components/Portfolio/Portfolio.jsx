import React from "react";
import "./portfolio.scss";
import Avengers from "../../assets/photo1675320292.jpeg";
import Movie from "../../assets/0eac2e2c-5117-4069-843c-0618281a240a.png";
import Users from "../../assets/2024-01-06 035623.png";
import Slider from "react-slick";

const MyPortfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    {
      id: 3,
      img: Users,
      name: "Users test web site",
      url: "https://users-test-task.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>PORTFOLIO</h2>
      <span>LATEST WORKS</span>
      <div className="portfolio__wrapper">
        <ul className="portfolio__list">
          <Slider {...settings}>
            {myWorks.map(({ id, img, url, name }) => (
              <li key={id} className="portfolio__list-item">
                <div className="portfolio__list-item__wrapper">
                  <a target="_blank" href={url}>
                    <div className="portfolio__image-wrapper">
                      <img
                        className="portfolio__image"
                        src={img}
                        alt="project-photo"
                        loading="lazy"
                      />
                    </div>
                    <div className="portfolio__list-item">
                      <div>
                        <p>{name}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default MyPortfolio;
