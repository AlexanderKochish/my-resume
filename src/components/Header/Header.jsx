import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import myPdfFile from "../../file/cv_1_1676578718575.pdf";

const AppHeader = () => {
  const [navActive, setNavActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const parent = document.querySelector(".header__nav-list");
    const list = document.querySelectorAll(".header__nav-list li a");
    // delete all class 'active-section' from elements
    const removeActive = () =>
      list.forEach((item) => item.classList.remove("active-section"));
    removeActive();
    // add active class 'active-section' for current click element
    const addActive = (i) => list[i].classList.add("active-section");
    let currentSection = !localStorage.getItem("block")
      ? 1
      : localStorage.getItem("block");
    addActive(currentSection);
    // listen child element event for parent element
    function searchActive(e) {
      if (e.target) {
        list.forEach((item, i) => {
          if (e.target === item) {
            removeActive();
            localStorage.setItem("block", i);
            addActive(i);
            setNavActive(false);
          }
        });
      }
    }
    parent.addEventListener("click", searchActive);

    return () => {
      parent.addEventListener("click", searchActive);
    };
  }, []);

  let clazz = "header";
  const body = document.querySelector("body");

  if (navActive) {
    clazz += " active";
    body.style.overflowY = "hidden";
  } else {
    clazz += "";
    body.style.overflowY = "scroll";
  }
  let uniq;
  if (window.matchMedia("(min-width: 1200px)").matches) {
    uniq = "#home";
  } else {
    uniq = "#img";
    clazz += isScroll ? " activeScroll" : "";
  }

  return (
    <>
      <header className={clazz}>
        <div className="header__wrapper">
          <div className="header__logo">Alex</div>
          <nav className="header__nav">
            <ul ref={ref} className="header__nav-list">
              <li>
                <a href={uniq}>HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <a download href={myPdfFile}>
                  <div className="_btn">Download CV</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        onClick={() => setNavActive(!navActive)}
        className={navActive ? "burger__menu active" : "burger__menu"}
      >
        <span></span>
      </div>
    </>
  );
};

export default AppHeader;
