import React from "react";
import "./ProjectsTab.css";
import personalWebsite from "../../images/personalWebsite.png";
import Arkisys from "../../images/arkisys.png";
import AggieCodingClub from "../../images/aggieCodingClub.png";
import howdyhack from "../../images/HowdyHack.jpg";
const ProjectsTab = () => {
  return (
    <div className="ProjectsTab">
      <div className="proj">
        <img src={personalWebsite} alt=""></img>
        <div className="projText">
          <h2>Personal Website</h2>
          <p>
            I developed this website using React.js and implemented tab functionality using state. I learned how to publish a website<br></br>
            Skills: React.js, CSS, firebase<br></br>
            GitHub: <a href="https://github.com/jaejin0/personal_website" target="_blank" rel="noreferrer">https://github.com/jaejin0/personal_website</a>
          </p>
        </div>
      </div>
      <div className="proj">
        <img className="ArkisysImg" src={Arkisys} alt=""></img>
        <div className="projText">
          <h2>Project Member</h2>
          <p>
            I developed webpages for a company, Arkisys. I learned how to use Javascript to implement functionalites.<br></br>
            Skills: JS, CSS, Communication<br></br>
            Link: <a href="https://www.arkisys.com/" target="_blank" rel="noreferrer">https://www.arkisys.com/</a>
          </p>
        </div>
      </div>
      <div className="proj">
        <img className="AggieCodingClubImg" src={AggieCodingClub} alt=""></img>
        <div className="projText">
          <h2>Project Manager</h2>
          <p>
            I led a project group of Aggie Coding Club. We learned the fundamental of web development and React.js.
            I learned how to communicate with and manage a project group through regular meeting.<br></br>
            Skills: HTML, CSS, JS, React.js, GitHub, Project Management<br></br>
            GitHub: <a href="https://github.com/aggie-coding-club/react-apps" target="_blank" rel="noreferrer">https://github.com/aggie-coding-club/react-apps</a>
          </p>
        </div>
      </div>
      <div className="proj">
        <img src={howdyhack} alt=""></img>
        <div className="projText">
          <h2>Hackathon</h2>
          <p>
            I participated in HowdyHack 2021 with 3 teammates and developed a desktop pet program using Python
            I learned how group project works using GitHub for the first time.<br></br>
            Skills: Python, PyGame, GitHub<br></br>
            Devpost: <a href="https://devpost.com/software/reveille-radio-desktop-pet" target="_blank" rel="noreferrer">https://devpost.com/software/reveille-radio-desktop-pet</a>
          </p>
        </div>
      </div>
      <h2 className="continue">To Be Continued...</h2>
      {/* expain what projects I have done, react app, arkisys, personal webpage */}
    </div>
  );
};
export default ProjectsTab;