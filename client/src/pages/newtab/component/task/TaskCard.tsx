import React, { useState, useEffect, useRef } from "react";
import { Ellipsis, X } from "lucide-react";

import AddTask from "@pages/newtab/component/task/AddTask";
import EditTask from "@pages/newtab/component/task/EditTask";

function TaskCard() {
  const [menuShow, setMenuShow] = useState(false);
  const [editMenuShow, setEditMenuShow] = useState(false);

  const menuRef = useRef(null);

  const imgUrl = `https://www.robohash.org/s?set=set2&size=100x100`;

  function handleShowMenu() {
    setMenuShow(true);
  }

  function handleHideMenu() {
    setMenuShow(false);
  }

  function showEditTask() {
    setMenuShow(false);
    setEditMenuShow(true);
  }

  function showTaskCard(data) {
    // console.log(data);
    setEditMenuShow(data);
  }

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
    <div>
      {!editMenuShow ? (
        <div className="taskcard flex flex-col max-w-[300px]">
          <div className="flex flex-col p-4 rounded-md bg-[#101010]">
            <header className="flex flex-col relative">
              <p className="text-sm font-semibold text-gray-900">Task Name</p>
              <div className="ml-auto absolute right-0">
                <Ellipsis className="cursor-pointer" onClick={handleShowMenu} />
                {menuShow && (
                  <div
                    className="custom-card-menu-style absolute -right-44 top-0 text-zinc-500 bg-zinc-900"
                    ref={menuRef}
                  >
                    <header className="w-[250px] relative text-xs pb-2">
                      <h2 className="text-center">List Actions</h2>
                      <X
                        onClick={handleHideMenu}
                        className="absolute top-[0] right-[8px] w-[16px] h-[16px] cursor-pointer hover:bg-zinc-800 hover:rounded-sm"
                      />
                    </header>
                    <div className="flex flex-col">
                      <li
                        className="text-xs font-semibold text-zinc-500 cursor-pointer py-1 px-3 list-none hover:bg-zinc-800"
                        onClick={showEditTask}
                      >
                        Edit
                      </li>
                      <li className="text-xs font-semibold text-zinc-500 cursor-pointer py-1 px-3 list-none hover:bg-zinc-800">
                        Delete
                      </li>
                    </div>
                  </div>
                )}
              </div>
            </header>
            <div className="taskcard__task-profile-container flex items-center gap-2 my-2">
              <img
                className="w-[30px] h-[30px] object-cover rounded-full"
                src={imgUrl}
                alt=""
              />
              <p className="text-sm font-semibold text-[#6c6d6]">Ayyaz</p>
            </div>
            <p className="taskcard__task-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas minima debitis nesciunt ipsum asperiores expedita sint
              eos sapiente excepturi! Perferendis necessitatibus quaerat, id
              eveniet non accusantium in saepe ab.
            </p>
            <a
              className="taskcard__actionbtn"
              href="mailto:ayyazahmad009@gmail.comtext=hello ayyaz"
              target="_blank"
              rel="noreferrer"
            >
              {/* <a
              href="https://wa.me/923431215500?text=hello ayyaz"
              target="_blank"
              rel="noreferrer"
            > */}
              {/* <a href="https://www.whatsapp.com/desktop/send?phone=+923336973497&test=hello ayyaz"> */}
              Send
            </a>
          </div>
          {/* <AddTaskButton onClick={showAddTask}/> */}
          <AddTask />
        </div>
      ) : (
        <div>
          <EditTask onShowTaskCard={showTaskCard} />
        </div>
      )}
    </div>
  );
}

export default TaskCard;
