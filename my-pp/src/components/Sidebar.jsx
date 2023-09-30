import React from "react";

const Sidebar = ({ visible }) => {
  // Conditionally apply classes based on the visibility prop
  const sidebarClasses = `fixed left-0 top-0 z-[1035] h-screen w-60 ${
    visible ? "translate-x-0" : "-translate-x-full"
  } overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800`;

  return (
    <>
      {/* Rest of your Sidebar component code */}
      <nav
        id="sidenav-2"
        className={sidebarClasses}
        // ...
      >
        {/* ... */}
      </nav>
      {/* ... */}
    </>
  );
};

export default Sidebar;
