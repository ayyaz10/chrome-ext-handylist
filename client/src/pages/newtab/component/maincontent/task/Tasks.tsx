import React, { useState } from "react";
import TaskCard from "@pages/newtab/component/maincontent/task/TaskCard";
import Tabs from "@pages/newtab/component/maincontent/tabs/Tabs";
import tabsData from "@pages/newtab/component/maincontent/tabs/data.js";
import taskCardData from "@pages/newtab/component/maincontent/task/data.js";

const Task = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].name);

  const filteredTaskCardData = taskCardData.filter((task) => {
    return task.id === activeTab;
  });

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {filteredTaskCardData.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Task;
