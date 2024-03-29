import "./socialNetwork.scss";
import facebook from "../../assets/FacebookNegative.png";
import instagram from "../../assets/InstagramNegative.png";
import github from "../../assets/GithubNegative.png";

const SocialNetwork = () => {
  const socialNetwork = [
    { id: 1, img: facebook, link: "#", name: "facebook" },
    { id: 2, img: instagram, link: "#", name: "instagram" },
    {
      id: 3,
      img: github,
      link: "https://github.com/AlexanderKochish",
      name: "github",
    },
  ];

  return (
    <section className="network">
      <ul className="network__list">
        {socialNetwork.map(({ id, img, link }) => (
          <li key={id} className="network__list-item">
            <a
              target="_blank"
              href={link}
            >
              <img src={img} alt="social network icon" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialNetwork;
