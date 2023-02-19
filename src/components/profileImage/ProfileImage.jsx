import "./profileImage.scss";
import { useEffect, useRef } from "react";
import myPhoto from "../../assets/DSC09338.jpg";
import myPhoto2 from "../../assets/user.jpg";

const ProfileImage = () => {
  const ref = useRef(myPhoto);
  const mql = window.matchMedia("(min-width: 1200px)");

  function screenTest(e) {
    if (e.matches) {
      ref.current.src = myPhoto;
    } else {
      ref.current.src = myPhoto2;
    }
  }

  useEffect(() => {
    mql.addEventListener("change", screenTest);

    return () => {
      mql.removeEventListener("change", screenTest);
    };
  }, []);

  return (
    <div id="img" className="profile__img">
      <img
        ref={ref}
        src={!mql.matches ? myPhoto2 : myPhoto}
        alt="profile photo"
        className="profile_photo"
      />
    </div>
  );
};

export default ProfileImage;
