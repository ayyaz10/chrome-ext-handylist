import React from 'react';
import TaskCard from './component/TaskCard';
import AddTask from './component/AddTask';
import './NewTab.css';
function NewTab() {
  function getTimeInSecondsSinceEpoch() {
    const currentTimeInMillis = Date.now();
    const currentTimeInSeconds = Math.floor(currentTimeInMillis / 1000);
    return currentTimeInSeconds;
  }

  // chrome.storage.sync.set({ imgUrl });
  console.log('hello world');
  return (
    <div className="tasklistcontainer">
      <TaskCard />
      <AddTask />
    </div>
  );
}

export default NewTab;
