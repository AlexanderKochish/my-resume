import React, { useEffect, useState } from "react";
import "./contact.scss";

const AppContact = () => {
  const [incorect, setIncorect] = useState("");
  const [dis, setDis] = useState(false);

  const formValidate = (e) => {
    e.preventDefault();
    const name = /^\w\S\D$/gi;
    const email =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    let message = e.target[2].value;

    if (
      !name.test(String(e.target[0].value)) &&
      !email.test(String(e.target[1].value).toLowerCase())
    ) {
      setDis(false);
      setIncorect("Please enter the correct data!");
    } else {
      setDis(true);
      const data = {
        name: e.target[0].value,
        email: e.target[1].value,
        message,
      };

      fetch(`https://getform.io/f/${import.meta.env.VITE_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => console.log(res.json()))
        .catch((err) => console.log(err.message));
    }
    (e.target[0].value = ""),
    (e.target[1].value = ""),
    (e.target[2].value = "");
    document.location.assign("https://getform.io/thank-you");
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACT</h2>
      <span>LET'S TALK</span>
      <div className="contact__wrapper">
        <form onSubmit={formValidate} className="contact__form">
          {dis ? null : (
            <p className="contact__form-invalid_active">{incorect}</p>
          )}
          <div className="contact__form_label">
            <label htmlFor="user_name">
              FULL NAME<b>*</b>
            </label>
            <input id="user_name" type="text" placeholder="enter your name" />
          </div>
          <div className="contact__form_label">
            <label htmlFor="user_email">
              EMAIL ADDRESS<b>*</b>
            </label>
            <input
              id="user_email"
              type="email"
              placeholder="example@domain.com"
            />
          </div>
          <div className="contact__form_label">
            <label htmlFor="user_message">
              MESSAGE<b>*</b>
            </label>
            <textarea
              className="contact__form-message"
              placeholder="to write message"
              id="user_message"
            ></textarea>
          </div>
          <button type="submit" className="contact__form-btn">
            send message
          </button>
        </form>
        <div className="contact__info">
          <h3>Alex</h3>
          <span>web developer</span>
          <ul>
            <li>
              AGE: <span>31</span>
            </li>
            <li>
              RESIDENCE: <span>UKRAINE</span>
            </li>
            <li>
              FREELANCE: <span>Available</span>
            </li>
            <li>
              ADDRESS: <span>Kyiv</span>
            </li>
            <li>
              PHONE:{" "}
              <a href="tel:+380983293090<">
                <span className="link__hover">+380 98 329 3090</span>
              </a>
            </li>
            <li>
              E-MAIL:{" "}
              <a href="mailto:shvepsolek@gmail.com">
                <span className="link__hover">shvepsolek@gmail.com</span>
              </a>
            </li>
          </ul>
          <div className="contact__info-mytag">Alexandr</div>
        </div>
      </div>
    </section>
  );
};

export default AppContact;
