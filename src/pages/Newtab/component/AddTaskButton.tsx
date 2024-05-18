import React from 'react';
import { Plus } from 'lucide-react';
function AddTaskButton({ onClick }) {
  return (
    <div className="addtask__createtaskbtn" onClick={onClick}>
      <Plus width={18} className="addtask__icon" />
      <p className="addtask__btn-text">Add a task</p>
    </div>
  );
}

export default AddTaskButton;
