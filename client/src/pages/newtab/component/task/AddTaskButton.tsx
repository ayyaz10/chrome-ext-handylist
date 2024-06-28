import React from "react";
import { Plus } from "lucide-react";
function AddTaskButton({ onClick }) {
  return (
    <div
      className="addtask__createtaskbtn flex gap-2 justify-center items-center bg-primary text-white w-full text-sm px-2 py-2 mt-3 rounded-sm"
      onClick={onClick}
    >
      <Plus width={18} className="addtask__icon" />
      <p className="addtask__btn-text">Add a task</p>
    </div>
  );
}

export default AddTaskButton;
