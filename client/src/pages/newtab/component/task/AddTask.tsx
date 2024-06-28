import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import AddTaskButton from "@pages/newtab/component/task/AddTaskButton";

function AddTask({ isEditing, onShowTaskCard }) {
  const [showAddTask, setShowAddTask] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Hide add task
  function handleHideAddTask() {
    setShowAddTask(false);
    if (editMode) {
      onShowTaskCard(false);
    }
  }

  // To show add task
  function handleShowAddTask() {
    setShowAddTask(true);
  }

  useEffect(() => {
    if (isEditing) {
      setShowAddTask(true);
      setEditMode(true);
    }
  }, [isEditing]);

  return (
    <div className="addtask">
      {!isEditing && <AddTaskButton onClick={handleShowAddTask} />}
      {/* <AddTaskButton onClick={handleShowAddTask} /> */}
      {showAddTask && (
        <div className="addTask__insertcard flex task-item">
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
              {/* {editMode && ( */}
              <X className="taskcard__closebtn" onClick={handleHideAddTask} />
              {/* )} */}
              <a href="#" className="taskcard__actionbtn">
                {editMode ? "Update Task" : "Add Task"}
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
