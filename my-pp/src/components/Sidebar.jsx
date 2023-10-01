import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-60 overflow-y-auto bg-gray-100 text-white-800 dark:bg-base-300  p-4 space-y-4 mt-20">
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