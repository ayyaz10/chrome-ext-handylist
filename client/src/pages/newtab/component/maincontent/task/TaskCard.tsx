import React, { useState, useEffect, useRef } from "react";
import { Ellipsis, X } from "lucide-react";
import { Blocks } from "react-loader-spinner";
import AddTask from "@pages/newtab/component/maincontent/task/AddTask";
import EditTask from "@pages/newtab/component/maincontent/task/EditTask";

function TaskCard({
  id,
  cardTitle,
  name,
  description,
  button,
  addNewButton,
  addButton,
  updateButton,
  cardProfileImage,
  isContactDetail,
}) {
  console.log(id, cardTitle);
  const [menuShow, setMenuShow] = useState(false);
  const [editMenuShow, setEditMenuShow] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null); // State to manage which task is in edit mode

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const menuRef = useRef(null);

  const baseUrl = `http://localhost:5000/api/tasks?type=${cardTitle.toLowerCase()}`;
  const imgUrl = `https://www.robohash.org/s?set=set2&size=100x100`;

  function handleShowMenu() {
    setMenuShow(true);
  }

  function handleHideMenu() {
    setMenuShow(true);
  }
  function showEditTask(taskId) {
    console.log(taskId);
    console.log(id);
    if (taskId === id) {
      setMenuShow(false);
      setEditMenuShow(true);
    }
  }

  function showTaskCard(data) {
    setEditMenuShow(data);
  }

  useEffect(() => {
    setLoading(false);
    const fetchTasks = async () => {
      try {
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          setFetchError("Could not fetch the tasks");
          setTasks([]);
        } else {
          const data = await response.json();
          setTasks(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error("Error fetching tasks", error);
        setFetchError("Could not fetch the tasks");
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    // fetchTasks();
  }, [baseUrl]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleHideMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-3">
      {loading && (
        <p className="flex justify-center">
          <Blocks
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </p>
      )}
      {fetchError && <p className="text-red-500">{fetchError}</p>}

      {!editMenuShow ? (
        <>
          <div className="taskcard flex flex-col mb-2">
            <div className="flex flex-col p-4 rounded-md bg-secondary">
              <header className="flex flex-col relative">
                <p className="text-sm font-semibold text-text">{cardTitle}</p>
                <div className="ml-auto absolute right-0">
                  <Ellipsis
                    className="cursor-pointer text-text"
                    onClick={handleShowMenu}
                  />
                  {menuShow && (
                    <div
                      className="custom-card-menu-style absolute -right-44 top-0 text-text bg-secondary p-2 rounded-lg"
                      ref={menuRef}
                    >
                      <header className="w-[250px] relative text-xs pb-2">
                        <h2 className="text-center">List Actions</h2>
                        <X
                          onClick={handleHideMenu}
                          className="absolute top-[0] right-0 w-[16px] h-[16px] cursor-pointer hover:bg-hoverBackground hover:rounded-sm"
                        />
                      </header>
                      <div className="flex flex-col">
                        <li
                          className="text-xs font-semibold text-text cursor-pointer list-none hover:bg-hoverBackground rounded-sm py-1 px-1"
                          // onClick={showEditTask}
                          onClick={() => showEditTask(id)}
                        >
                          Edit
                        </li>
                        <li className="text-xs font-semibold text-text cursor-pointer list-none hover:bg-hoverBackground rounded-sm py-1 px-1">
                          Delete
                        </li>
                      </div>
                    </div>
                  )}
                </div>
              </header>
              <div className="taskcard__task-profile-container flex items-center gap-2 my-2">
                {cardProfileImage && (
                  <img
                    className="w-[30px] h-[30px] object-cover rounded-full"
                    src={imgUrl}
                    alt=""
                  />
                )}
                <p className="text-sm font-semibold text-text">
                  {name || "heloworld"}'
                </p>
              </div>
              <p className="taskcard__task-description text-text">
                {description}
              </p>
              <a
                className="taskcard__actionbtn self-end text-sm font-semibold bg-primary text-white text-center block w-lg mt-4 py-2 px-6 rounded-lg"
                href="mailto:ayyazahmad009@gmail.comtext=hello ayyaz"
                target="_blank"
                rel="noreferrer"
              >
                {button}
              </a>
            </div>
          </div>
        </>
      ) : (
        <div>
          <EditTask
            onShowTaskCard={showTaskCard}
            newTaskProps={{ addButton, updateButton, isContactDetail }}
          />
        </div>
      )}
    </div>
  );
}

export default TaskCard;
