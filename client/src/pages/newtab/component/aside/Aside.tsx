import React from "react";

const Aside = () => {
  return (
    <div className="">
      <input
        className="bg-background text-text text-sm px-2 py-2"
        type="text"
        placeholder="Search..."
      />
      <div className="flex flex-col mt-4 text-text">
        <h3 className="text-sm font-semibold">Favorites</h3>
        <nav className="list-none text-sm mt-2">
          <li>Tasks</li>
          <li>Quotes</li>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
