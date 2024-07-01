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
      {!isEditing && <AddTaskButton handleShowAddTask={handleShowAddTask} />}
      {/* <AddTaskButton onClick={handleShowAddTask} /> */}
      {showAddTask && (
        <div className="addTask__insertcard task-item mt-4">
          <form action="" className="flex flex-col gap-2">
            <div className="addTask__inputcontainer w-full">
              <input
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                type="text"
                placeholder="Task Name"
              />
            </div>
            <div className="addTask__inputcontainer">
              <input
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                type="text"
                placeholder="Receiver Name"
              />
            </div>
            <div className="addTask__inputcontainer">
              <textarea
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                placeholder="Content"
                rows={4}
              ></textarea>
            </div>
            <div className="addTask__inputcontainer">
              <input
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                type="text"
                placeholder="Contact detail"
              />
            </div>
            <div className="taskcard__actionbtncontainer flex items-center">
              {/* {editMode && ( */}
              <X
                width={36}
                height={36}
                className="taskcard__closebtn text-text cursor-pointer p-1 hover:bg-hoverBackground rounded-md ml-auto"
                onClick={handleHideAddTask}
              />
              {/* )} */}
              <a
                href="#"
                className="taskcard__actionbtn text-sm font-semibold bg-primary text-white text-center block w-lg py-2 px-6 rounded-md"
              >
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
