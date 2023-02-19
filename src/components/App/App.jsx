import Header from "../Header/Header";
import ProfileImage from "../profileImage/ProfileImage";
import Title from "../Title/Title";
import AboutMe from "../About/AboutMe";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <ProfileImage />
        <div className="content">
          <Title />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
        <SocialNetwork />
      </main>
    </div>
  );
}

export default App;
