import React from 'react';
import { Plus } from 'lucide-react';
function AddTask() {
  return (
    <div className="addtask">
      <div className="addtask__createtaskbtn">
        <Plus width={18} className="addtask__icon" />
        <p className="addtask__btn-text">Add a task</p>
      </div>
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
            <input
              className="addTask__textinput"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="addTask__inputcontainer">
            <input
              className="addTask__textinput"
              type="text"
              placeholder="Contact detail"
            />
          </div>
          <a href="#" className="taskcard__actionbtn">
            Add Task
          </a>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
