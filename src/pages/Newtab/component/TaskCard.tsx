import React from 'react';
function TaskCard() {
  const imgUrl = `https://www.robohash.org/s?set=set2&size=100x100`;
  return (
    <div className="taskcard">
      <div className="taskcard__card-text">
        <p className="taskcard__task-name">Task Name</p>
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
          href="https://wa.me/923431215500?text=hello ayyaz"
          target="_blank"
          rel="noreferrer"
        >
          {/* <a href="https://www.whatsapp.com/desktop/send?phone=+923336973497&test=hello ayyaz"> */}
          Send
        </a>
      </div>
    </div>
  );
}

export default TaskCard;
