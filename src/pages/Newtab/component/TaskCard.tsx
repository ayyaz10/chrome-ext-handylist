import React, { useState } from 'react';
import { Ellipsis, X } from 'lucide-react';

import AddTask from './AddTask';

function TaskCard() {
  const [show, setShow] = useState(false);
  const imgUrl = `https://www.robohash.org/s?set=set2&size=100x100`;

  function handleShowMenu() {
    setShow(true);
  }
  function handleHideMenu() {
    setShow(false);
  }
  return (
    <div className="taskcard">
      <div className="taskcard__card-text task-item">
        <header className="taskcard__header">
          <p className="taskcard__task-name">Task Name</p>
          <div className="taskcard__menu">
            <Ellipsis className="taskcard__menubtn" onClick={handleShowMenu} />
            {show && (
              <div className="taskcard__menucontainer">
                <header className="taskcard__menuheader">
                  <h2 className="taskcard__menuheading">List Actions</h2>
                  <X className="taskcard__menuclose" onClick={handleHideMenu} />
                </header>
                <div className="taskcard__menuitems">
                  <li className="taskcard__edit menu-item">Edit</li>
                  <li className="taskcard__delete menu-item">Delete</li>
                </div>
              </div>
            )}
          </div>
        </header>
        <div className="taskcard__task-profile-container">
          <img className="taskcard__img" src={imgUrl} alt="" />
          <p className="taskcard__name">Ayyaz</p>
        </div>
        <p className="taskcard__task-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas minima debitis nesciunt ipsum asperiores expedita sint eos
          sapiente excepturi! Perferendis necessitatibus quaerat, id eveniet non
          accusantium in saepe ab.
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
      <AddTask />
    </div>
  );
}

export default TaskCard;
