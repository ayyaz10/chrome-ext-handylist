import React from "react";
import { Routes, Route } from "react-router-dom";

import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";
import Navbar from "@pages/newtab/component/Navbar";
import TaskCard from "@pages/newtab/component/task/TaskCard";
import QuoteCard from "@pages/newtab/component/quotes/QuoteCard";

const Newtab = () => {
  return (
    <div className="App bg-black h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskCard />} />
        <Route path="/quotes" element={<QuoteCard />} />
      </Routes>
    </div>
  );
};

export default Newtab;
