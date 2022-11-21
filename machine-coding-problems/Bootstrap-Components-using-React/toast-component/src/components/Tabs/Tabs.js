import React, { useState, useEffect } from "react";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [allTabs, setAlltabs] = useState([]);

  useEffect(() => {
    setAlltabs(tabs);
  }, [tabs]);

  //   console.log(tabs);
  //   console.log(allTabs);

  return (
    <div className="box">
      <div className="tabs">
        {allTabs &&
          allTabs.length > 0 &&
          allTabs.map((tab, index) => {
            return (
              <div
                key={index}
                className={`tab ${activeTab === index ? "active-tab" : ""} `}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </div>
            );
          })}
      </div>
      <div className="tab-content">
        {allTabs.map((tab, index) => {
          return (
            <div
              className={`content ${
                activeTab === index ? "active-content" : ""
              }`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
