import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto"> 
      <Navbar />
      <div className="flex-grow"> 
        <Outlet />
      </div>
      <Footer /> 
    </div>
  );
};

export default Main;
