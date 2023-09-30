import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  // Create a state variable to track the visibility of the Sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle the Sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Render the Sidebar component here and pass the visibility state */}
        <Sidebar visible={sidebarVisible} />
      </div>
      <div className="navbar-center">
        {/* Add a button to toggle the Sidebar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
      </div>
    </div>
  );
};

export default Navbar;
