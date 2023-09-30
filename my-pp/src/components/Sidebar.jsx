import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-60 overflow-y-auto bg-opacity-80 backdrop-blur-lg bg-gray-100 text-gray-800 dark:bg-opacity-60 dark:bg-black dark:text-white p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">*Logo*</h1>
      </div>
      <br></br>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-blue-600">
            Category 1
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Category 2
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Category 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;