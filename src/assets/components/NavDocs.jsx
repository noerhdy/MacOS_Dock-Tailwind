import { icons } from "@/constants";
import React, { useState } from "react";

const NavDoc = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getClassName = (index) => {
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) {
        return "w-14 h-14 mt-0 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
      }
      if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
        return "w-11 h-11 mt-2 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
      }
    }
    return "w-10 h-10 mt-1 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
  };

  const getSpanClassName = (index) => {
    if (index === hoveredIndex) {
      return "visible text-white p-1 text-sm -top-10 -ml-6 absolute px-2 rounded-md bg-blue-500 dark:text-zinc-200 text-white-100";
    }
    return "text-xs absolute -ml-5 -top-8 opacity-0";
  };

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* <div className="fixed inset-x-0 bottom-0 flex h-16 mb-2 items-center > */}
      <div className=" flex items-center justify-center ">
        <div className=" shadow-lg mx-auto relative flex h-[64px] items-end gap-1 md:gap-2 rounded-2xl backdrop-blur-sm backdrop-filter border border-neutral-800/5 bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% px-6 pb-2 dark:bg-zinc-900/5 md:px-4">
          {icons.map((icon, index) => (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(icon.url)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <span className={getSpanClassName(index)}>{icon.name}</span>
              <img
                className={`aspect-square rounded-md ${getClassName(index)}`}
                src={icon.src}
                alt={icon.name}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavDoc;
