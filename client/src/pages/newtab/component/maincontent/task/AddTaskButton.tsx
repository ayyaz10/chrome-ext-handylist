import { Plus } from "lucide-react";
function AddTaskButton({ handleShowAddTask }) {
  return (
    <div
      className="addtask__createtaskbtn font-semibold text-center flex gap-2 justify-center items-center bg-secondary text-primary text-sm px-2 py-2 mt-3 rounded-lg cursor-pointer"
      onClick={handleShowAddTask}
    >
      <Plus width={18} className="addtask__icon font-semibold" />
      <p className="addtask__btn-text font-semibold">Add a task</p>
    </div>
  );
}

export default AddTaskButton;
