import React, { useState } from "react";
import useFetch from "@src/hooks/useFetch";
import tabsData from "@pages/newtab/component/maincontent/tabs/data.js";

const Tabs = ({ activeTab, setActiveTab }) => {
  function handleTabChange(tabName) {
    setActiveTab(tabName);
  }

  return (
    <div className="mb-4">
      <nav className="inline-flex gap-4 text-sm text-text bg-secondary list-none p-1 mt-4 rounded-full">
        {tabsData.map((tab) => (
          <li
            onClick={() => handleTabChange(tab.name)}
            key={tab.id}
            className={`bg-background hover:bg-white hover:text-black ${
              activeTab === tab.name ? "bg-white text-black" : ""
            }  px-4 py-2 rounded-full cursor-pointer`}
          >
            {tab.name}
          </li>
        ))}
      </nav>
      lg
    </div>
  );
};

export default Tabs;
