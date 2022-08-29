import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";



export default function Social() {
  return (
    <div className="social-container" >
      <a href="https://www.instagram.com/jaejin_cha" target="_blank" rel="noreferrer"
        className="instagramSocial">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/jaejincha/" target="_blank" rel="noreferrer" className="linkedinSocial">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/jaejin0" target="_blank" rel="noreferrer"
        className="githubSocial">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}