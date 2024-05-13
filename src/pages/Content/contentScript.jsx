import React, { useState } from 'react';

// import logo from '../../assets/img/icon-128.png';
import TaskList from './modules/TaskList';
import './content.styles.css';
function ContentScript() {
  const imageUrl = chrome.runtime.getURL('icon-128.png');
  const [isShow, setIsShow] = useState(false);

  function handleShowIcon() {
    console.log('clicked');
    setIsShow(true);
  }
  function handleHideIcon() {
    console.log('clicked');
    setIsShow(false);
  }

  return (
    <div>
      <div>
        <img
          onClick={handleShowIcon}
          style={{
            position: 'fixed',
            zIndex: 1,
            right: isShow ? '-8%' : '2%',
            bottom: '40%',
            opacity: isShow ? '0' : '1',
            transition: 'all .2s',
            visibility: isShow ? 'hidden' : 'visible',
          }}
          className="handylist-logo"
          src={imageUrl}
          width="80"
          height="80"
          alt="myimage"
        />
      </div>
      <div
        onClick={handleHideIcon}
        style={{
          position: 'fixed',
          zIndex: 1,
          right: isShow ? '2%' : '-8%',
          bottom: '40%',
          opacity: isShow ? '1' : '0',
          transition: 'all .2s',
          visibility: isShow ? 'visible' : 'hidden',
        }}
        className="handylist-button-container"
      >
        <img
          className="handylist-logo"
          src={imageUrl}
          width="80"
          height="80"
          alt="myimage"
        />
        <div className="handylist-button" id="injectedButton">
          Handy List
        </div>
        <TaskList />
      </div>
    </div>
  );
}
export default ContentScript;
