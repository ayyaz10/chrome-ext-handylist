import React from "react";
import { Routes, Route } from "react-router-dom";

import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";
import Navbar from "@pages/newtab/component/Navbar";
import TaskCard from "@pages/newtab/component/task/TaskCard";
import QuoteCard from "@pages/newtab/component/quotes/QuoteCard";
import Quote from "@pages/newtab/component/quotes/Quote";
import Aside from "./component/Aside";

const Newtab = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-2">
        <div className="w-[20%] px-8 py-2 h-screen border-r">
          <Aside />
        </div>
        <div className="w-[80%] px-4">
          <Navbar />
          <Quote />
          <Routes>
            <Route path="/" element={<TaskCard />} />
            <Route path="/quotes" element={<QuoteCard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Newtab;
