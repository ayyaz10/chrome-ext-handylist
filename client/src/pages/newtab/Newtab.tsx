import React from "react";
import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";
import TaskCard from "./component/task/TaskCard";
import QuoteCard from "./component/quotes/QuoteCard";

const Newtab = () => {
  return (
    <div className="App bg-gray-700 h-screen">
      <TaskCard />
      <QuoteCard />
    </div>
  );
};

export default Newtab;
