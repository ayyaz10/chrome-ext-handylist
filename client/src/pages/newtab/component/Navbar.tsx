import React from "react";

const Navbar = () => {
  return (
    <div className="mt-10 mb-3">
      <nav className="flex gap-4 text-lg font-semibold text-text">
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
