import React from "react";
import AddTask from "@pages/newtab/component/maincontent/task/AddTask";

function EditTask({ onShowTaskCard, newTaskProps }) {
  console.log("edit menu");
  return (
    <div>
      <AddTask
        isEditing={true}
        onShowTaskCard={onShowTaskCard}
        newTaskProps={newTaskProps}
      />
    </div>
  );
}

export default EditTask;
