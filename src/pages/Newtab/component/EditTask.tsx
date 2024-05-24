import React from "react";
import AddTask from "./AddTask";

function EditTask({ onShowTaskCard }) {
  console.log("edit menu");
  return (
    <div>
      <AddTask isEditing={true} onShowTaskCard={onShowTaskCard} />
    </div>
  );
}

export default EditTask;
