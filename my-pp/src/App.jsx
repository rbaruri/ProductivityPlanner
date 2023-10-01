import "./App.css";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import Sidebar from "./components/Sidebar";
import React, { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768); // Open sidebar on larger screens

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
      <Divider />
    </> 
  );
}

export default App;
