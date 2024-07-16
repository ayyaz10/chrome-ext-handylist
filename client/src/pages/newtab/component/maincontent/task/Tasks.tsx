import React, { useState, useEffect } from "react";
import TaskCard from "@pages/newtab/component/maincontent/task/TaskCard";
import Tabs from "@pages/newtab/component/maincontent/tabs/Tabs";
import tabsData from "@pages/newtab/component/maincontent/tabs/data.js";
import { taskCardUtilData } from "@pages/newtab/component/maincontent/task/data.js";
import { taskCardWhatsAppData } from "@pages/newtab/component/maincontent/task/data.js";

import TaskContextProvider from "@src/context/TaskContextProvider";
import AddTask from "./AddTask";

// context
// import

const Task = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].name);

  const filteredTaskCardUtilData = taskCardUtilData.filter((cardUtilData) => {
    return cardUtilData.id === activeTab;
  });
  const filteredTaskCardWhatsAppData = taskCardWhatsAppData.filter((data) => {
    return data.cardTitle.toLowerCase() === activeTab.toLowerCase();
  });
  useEffect(() => {
    // console.log(activeTab);
    // console.log(filteredTaskCardUtilData[0]);
    console.log(filteredTaskCardUtilData);
  }, [activeTab, filteredTaskCardUtilData]);

  return (
    <div className="max-w-[300px]">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {filteredTaskCardWhatsAppData.cardTitle ===
      filteredTaskCardUtilData[0] ? (
        <TaskCard
          {...filteredTaskCardUtilData[0]}
          {...filteredTaskCardWhatsAppData}
        />
      ) : null} */}
      {filteredTaskCardWhatsAppData.map((cards) => (
        <TaskCard {...cards} {...filteredTaskCardUtilData[0]} />
      ))}

      <AddTask {...filteredTaskCardUtilData[0]} />
    </div>
  );
};

export default Task;
{
  /* <AddTask
addNewButton={addNewButton}
newTaskProps={{ addButton, updateButton, isContactDetail }} */
}
// />
