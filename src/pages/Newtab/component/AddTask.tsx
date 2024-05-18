import React, { useState } from 'react';
import { X } from 'lucide-react';
import AddTaskButton from './AddTaskButton';
function AddTask() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  function handleShowAddTask() {
    setShowCreateTask(true);
  }
  function handleCloseAddTask() {
    setShowCreateTask(false);
  }
  return (
    <div className="addtask">
      <AddTaskButton onClick={handleShowAddTask} />
      {showCreateTask && (
        <div className="addTask__insertcard task-item">
          <form action="">
            <div className="addTask__inputcontainer">
              <input
                className="addTask__textinput"
                type="text"
                placeholder="Task Name"
              />
            </div>
            <div className="addTask__inputcontainer">
              <input
                className="addTask__textinput"
                type="text"
                placeholder="Receiver Name"
              />
            </div>
            <div className="addTask__inputcontainer">
              <textarea
                className="addTask__textinput"
                placeholder="Content"
                rows={4}
              ></textarea>
            </div>
            <div className="addTask__inputcontainer">
              <input
                className="addTask__textinput"
                type="text"
                placeholder="Contact detail"
              />
            </div>
            <div className="taskcard__actionbtncontainer">
              <X className="taskcard__closebtn" onClick={handleCloseAddTask} />
              <a href="#" className="taskcard__actionbtn">
                Add Task
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
