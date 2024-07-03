import React from "react";
import { Star, SquareCheckBig, Quote } from "lucide-react";

const Aside = () => {
  return (
    <div className="">
      <input
        className="bg-background text-text text-sm px-2 py-2"
        type="text"
        placeholder="Search..."
      />
      <div className="flex flex-col mt-4 text-text">
        <div className="title flex items-center gap-1 mb-2 font-bold">
          <Star size={16} />
          <h3 className="text-sm font-bold">Favorites</h3>
        </div>
        <nav className="flex flex-col gap-1 list-none text-sm mt-2">
          <li className="flex items-center gap-1 cursor-pointer">
            <SquareCheckBig size={14} />
            Tasks
          </li>

          <li className="flex items-center gap-1 cursor-pointer">
            <Quote size={14} />
            Quotes
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
