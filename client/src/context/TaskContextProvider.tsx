import { useState, useEffect } from "react";
import TaskContext from "@src/context/TaskContext";
import data from "@src/pages/newtab/component/maincontent/task/data";

const TaskContextProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{ loading, taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
