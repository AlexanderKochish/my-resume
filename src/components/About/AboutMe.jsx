import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about__wrapper">
        <h2>ABOUT ME</h2>
        <span>my story</span>
        <div className="about__content">
          <div className="about__content-inner">
            <div>
              <p>
                I like to create user interfaces. 
                I started developing them a year and a half ago.
                Why frontend you ask?  
              </p>
            </div>
            <div>
              <p>
                Because when you write code and 
                immediately see the result
                you understand what you are creating
                and why you are studying,
                so you want to create something again and again.
              </p>
            </div>
          </div>
          <div className="about__content-inner__last-block">
            <p>
              And so I realized that the creating user interface is mine,
              I am a creative person and an experimenter,
              so there is room to accelerate here.
              In the future, I plan to become a full-stack developer. 
              I like the web and I still have room to develop, 
              I hope that many projects await me in the future, 
              so whoever is reading this, write to 
              me and we will start working on these projects!
            </p>
          </div>
        </div>
        <div className="about__my-info">
          <ul>
            <li>
              AGE:{' '} <span>31</span>
            </li>
            <li>
              FREELANCE:{' '} <span>Available</span>
            </li>
            <li>
              PHONE: {' '}<a href="tel:+380983293090">
              <span className="link__hover">+380 98 329 3090</span>
              </a>
            </li>
            <li>
              RESIDENCE:{' '} <span>UKRAINE</span>
            </li>
            <li>
              ADDRESS:{' '}<span>Kyiv</span>
            </li>
            <li>
              E-MAIL:{' '} <a href="mailto:shvepsolek@gmail.com">
                <span className="link__hover">shvepsolek@gmail.com</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
