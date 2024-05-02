import React from "react";

export default function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-brands fa-facebook" />
        <SocialButton icon="fa-brands fa-instagram" />
        <SocialButton icon="fa-brands fa-twitter" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-brands fa-linkedin" />
        <SocialButton icon="fa-brands fa-github" />
      </div>
    </>
  );
}

function SocialButton({ icon }) {
  return (
    <button>
      <i className={icon}></i>
    </button>
  );
}
