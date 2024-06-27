import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/yuanmeng-kevin-zhang-09114b161/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://www.instagram.com/kevdrktea/?hl=en"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="" className="home__social-link" target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a href="" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
