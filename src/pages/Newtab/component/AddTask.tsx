import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AddTaskButton from './AddTaskButton';

function AddTask({ addTaskShow }) {
  const [showTask, setShowTask] = useState(false);
  const [editMode, setEditMode] = useState(true);
  function handleHideAddTask() {
    setShowTask(false);
  }
  function handleShowAddTask() {
    setShowTask(true);
  }

  useEffect(() => {
    if (addTaskShow) {
      setShowTask(true);
      setEditMode(false);
    }
  }, [addTaskShow]);

  return (
    <div className="addtask">
      {editMode && <AddTaskButton onClick={handleShowAddTask} />}
      {showTask && (
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
              {editMode && (
                <X className="taskcard__closebtn" onClick={handleHideAddTask} />
              )}
              <a href="#" className="taskcard__actionbtn">
                {editMode ? 'Add Task' : 'Update Task'}
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
