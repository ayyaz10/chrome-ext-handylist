import React from 'react';
import { Plus } from 'lucide-react';

function AddTask() {
  return (
    <div className="addtask">
      <div className="addtask__button">
        <Plus width={18} className="addtask__icon" />
        <p className="addtask__btn-text">Add a task</p>
      </div>
    </div>
  );
}

export default AddTask;
