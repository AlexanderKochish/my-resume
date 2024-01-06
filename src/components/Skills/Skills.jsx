import React from "react";
import "./skills.scss";
import html from "../../assets/174854.png";
import css from "../../assets/CSS3_logo.svg.png";
import javascript from "../../assets/Javascript_Logo.png";
import react from "../../assets/React-icon.svg.png";
import tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import git from "../../assets/5847f981cef1014c0b5e48be.png";
import sass from "../../assets/5968358.png";

const MySkills = () => {
  const skills = [
    { id: 1, img: html, lang: "html" },
    { id: 2, img: css, lang: "css" },
    { id: 3, img: sass, lang: "sass / scss" },
    { id: 4, img: javascript, lang: "javascript" },
    { id: 5, img: react, lang: "react" },
    { id: 6, img: tailwind, lang: "tailwind" },
    { id: 7, img: git, lang: "git" },
  ];
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p>DEVELOPING ON</p>
      <div className="skills__wrapper">
        <ul className="skills__list">
          {skills.map(({ id, img, lang }) => (
            <li key={id} className="skills__list-item">
              <div className="skills__list-item__box">
                <img src={img} alt="programming image" loading="lazy"/>
                <h4>{lang}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MySkills;
