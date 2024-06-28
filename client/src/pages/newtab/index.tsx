import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import NewTab from "@pages/newtab/Newtab";
import "@pages/newtab/index.css";

const container = document.getElementById("app-container");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <div className="dark">
      <NewTab />
    </div>
  </Router>
);
