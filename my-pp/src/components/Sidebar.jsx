import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-60 overflow-y-auto bg-opacity-80 backdrop-blur-lg bg-gray-100 text-gray-800 dark:bg-opacity-60 dark:bg-black dark:text-white p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Your Brand</h1>
      </div>
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

const Navbar = () => {
  return (
    <div className="bg-blue-600 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Your Brand</h1>
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            Category 1
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Category 2
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Category 3
          </a>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="container mx-auto p-4">
          {/* Content Goes Here */}
          <p>Your page content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
