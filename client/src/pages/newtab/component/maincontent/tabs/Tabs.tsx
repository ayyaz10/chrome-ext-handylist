import React from "react";

const Tabs = () => {
  return (
    <div>
      <nav className="inline-flex gap-4 text-sm text-text bg-secondary list-none p-1 mt-4 rounded-full">
        <li className="bg-background hover:bg-hoverBackground px-4 py-2 rounded-full cursor-pointer">
          Email
        </li>
        <li className="bg-background hover:bg-hoverBackground px-4 py-2 rounded-full cursor-pointer">
          WhatsApp
        </li>
        <li className="bg-background hover:bg-hoverBackground px-4 py-2 rounded-full cursor-pointer">
          Tasks
        </li>
      </nav>
      lg
    </div>
  );
};

export default Tabs;
