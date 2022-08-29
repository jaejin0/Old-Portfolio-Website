import React from "react";
import "./TabPages.css";
import profile from "../../images/profile_picture.jpeg";
const HomeTab = () => {
  return (
    <div className="HomeTab">
      <h1 className="welcome">Welcome to Jaejin's<br></br>personal website!</h1>
      <img src={profile} className="profile" alt=""></img>
      <h4 className="introMe">I am a 2022-2023 junior student at Texas A&amp;M, majoring in Computer Science.<br></br>Now I look forward for experiencing and learning about a lot of different skills in software engineering.</h4>
      <p className="introSite">This is a personal website where you can find more about me.<br></br>check About Me and Projects for more information of me!</p>
      <h4 className="quote">"The greatest successes come from having the freedom to fail"</h4>
      <h5 className="quoteperson">- Mark Zuckerberg -</h5>
      {/* welcome message, Who I am, what I am, intro of me, not much of content but the simplicity */}
    </div>
  );
};
export default HomeTab;