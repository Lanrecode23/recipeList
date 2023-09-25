import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="copy pt-4 text-white fw-lighter "> <h6>&copy; Lanrecode( M.soft )</h6></div>
      <div className="icons pt-3">
        <a href="mailto:lanrecode23@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/image/email.png" alt="nnnnn" />
        </a>
        <a href="https://github.com/Lanrecode23/recipeList" target="_blank" rel="noopener noreferrer">
          <img src="/image/github.png" alt="" />
        </a>
        <a href={`https://wa.me/08059487039`} target="_blank"rel="noopener noreferrer">
          <img src="/image/whatsapp.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
