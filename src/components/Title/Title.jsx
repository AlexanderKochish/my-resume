import "./title.scss";

const AppTitle = () => {
  
  return (
    <section id="home" className="title">
      <div className="title__round">
        <h2>Alex</h2>
      </div>
      <div className="title__content">
        <div className="title__runtext">
          <p className="runtext">web developer</p>
        </div>
        <p>
          Hello! I am a front-end web developer,
          I have 1 year of experience in JavaScript, React, Redux,
          Redux-toolkit, Scss, Tailwindcss, Html, and Css3, 
          and I know how to work with Git.  
          Constantly developing as a developer, 
          one word I am ready to work!
        </p>
        <a href="#contact">
          <div className="_btn">Contact me</div>
        </a>
      </div>
    </section>
  );
};


export default AppTitle;
