import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{width:'90%', marginTop:20}}/>
      <span className="name">
        Made by {" "}
        <a href="https://www.youtube.com/channel/UCWFSKtpi58Il_FuiF7kqcgA" target='_blank' rel="noreferrer">ashkar_tech</a>
      </span>
      <div className="iconContainer">
        <a href="https://github.com/Ashkar-Noorul" target='_blank' rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/noorul-ashkar-2bb1b71a4/" target='_blank' rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCWFSKtpi58Il_FuiF7kqcgA" target='_blank' rel="noreferrer">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer