import React from "react";
import { Routes, Route } from "react-router-dom";

import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";
import Navbar from "@pages/newtab/component/Navbar";
import TaskCard from "@pages/newtab/component/maincontent/task/TaskCard";
import QuoteCard from "@pages/newtab/component/maincontent/quotes/QuoteCard";
import Quote from "@pages/newtab/component/maincontent/quotes/Quote";
import Aside from "./component/aside/Aside";
import Tabs from "./component/maincontent/tabs/Tabs";

const Newtab = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-2">
        <div className="w-72 px-8 py-2 h-screen">
          <Aside />
        </div>
        <div className="w-full px-4 border-l border-secondary">
          <Navbar />
          <Quote />
          <Tabs />
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
