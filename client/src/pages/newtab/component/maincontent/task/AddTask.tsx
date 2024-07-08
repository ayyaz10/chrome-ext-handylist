import React, { useState, useEffect, SyntheticEvent } from "react";
import { X } from "lucide-react";
import AddTaskButton from "@pages/newtab/component/maincontent/task/AddTaskButton";

import axios from "@src/apis/tasks";
import useAxiosFunction from "@src/hooks/useAxiosFunction";

function AddTask({ isEditing, onShowTaskCard }) {
  const [showAddTask, setShowAddTask] = useState(false);
  const [editMode, setEditMode] = useState(false);
  // form inputs
  const [taskName, setTaskName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [content, setContent] = useState("");
  const [contactDetail, setContactDetail] = useState("");

  const [tasks, error, loading, axiosFetch] = useAxiosFunction();

  // const sendData = (formData) => {
  //   axiosFetch({
  //     axiosInstance: axios,
  //     method: "POST",
  //     url: "/api/addtask",
  //   });
  // };

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

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = {
      taskName,
      receiverName,
      content,
      contactDetail,
    };

    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/api/addtask",
      requestConfig: formData,
    });
  }
  // function sendData(formData) {
  //   axios.post;
  // }

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
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="addTask__inputcontainer w-full">
              <input
                onChange={(e) => {
                  // console.log(e.target.value);
                  setTaskName(e.target.value);
                }}
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                type="text"
                placeholder="Task Name"
                required
              />
            </div>
            <div className="addTask__inputcontainer">
              <input
                onChange={(e) => {
                  setReceiverName(e.target.value);
                }}
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                type="text"
                placeholder="Receiver Name"
              />
            </div>
            <div className="addTask__inputcontainer">
              <textarea
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="addTask__textinput w-full text-sm bg-secondary border-none text-text px-2 py-3 rounded-md"
                placeholder="Content"
                rows={4}
              ></textarea>
            </div>
            <div className="addTask__inputcontainer">
              <input
                onChange={(e) => {
                  setContactDetail(e.target.value);
                }}
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
              <button className="taskcard__actionbtn text-sm font-semibold bg-primary text-white text-center block w-lg py-2 px-6 rounded-md">
                {editMode ? "Update Task" : "Add Task"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
