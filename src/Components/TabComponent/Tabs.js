import React, { useState } from "react";
import HomeTab from "../AllTabs/HomeTab";
import AboutMeTab from "../AllTabs/AboutMeTab";
import ProjectsTab from "../AllTabs/ProjectsTab";
import "./Tabs.css";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")
      //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("tab3");
    };
    return (
        <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
            <div className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Home</div>
            <div className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>About Me</div>
            <div className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Projects</div>
        </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <HomeTab/> : ""}
                {activeTab === "tab2" ? <AboutMeTab/> : ""}
                {activeTab === "tab3" ? <ProjectsTab/> : ""}
            </div>
        </div>
    );
};
export default Tabs;