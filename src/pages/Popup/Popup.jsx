import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  // function store
  return (
    <div className="App">
      <main>
        <header>
          <ul>
            <li>
              <img src={logo} width="40" height="40" alt="" />
            </li>
            <li>handylist</li>
          </ul>
        </header>
        <section>
          <form action="">
            <input type="checkbox" id="handyPopupCheckbox" />
            <label htmlFor="handyPopupCheckbox">Enable HandyList Popup</label>
          </form>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Popup;
