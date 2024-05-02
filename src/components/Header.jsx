import React from "react";

export default function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-brands fa-facebook" />
        <SocialButton
          icon="fa-brands fa-instagram"
          link="https://www.instagram.com/justin.hezelnat30/"
        />
        <SocialButton icon="fa-brands fa-twitter" />
      </div>
      <div className="social-buttons right">
        <SocialButton
          icon="fa-brands fa-linkedin"
          link="www.linkedin.com/in/justinhezekiel30

"
        />
        <SocialButton
          icon="fa-brands fa-github"
          link="https://github.com/Hezelnat30"
        />
      </div>
    </>
  );
}

function SocialButton({ icon, link }) {
  return (
    <button>
      <a href={link} target="_blank">
        <i className={icon}></i>
      </a>
    </button>
  );
}
