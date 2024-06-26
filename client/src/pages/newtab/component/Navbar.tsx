import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[380px] m-auto">
      <nav className="flex justify-between text-lg font-semibold">
        <a href="#/">
          <li className="list-none">Tasks</li>
        </a>
        <a href="#/quotes">
          <li className="list-none">Quotes</li>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
