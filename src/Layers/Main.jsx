import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";



const Main = () => {


  return (
    <div className="max-w-[1440px] mx-auto" > {/* 🔹 Key added here */}
      <Navbar />
      <Outlet /> {/* 🔹 No need to add key here */}
      <Footer />
    </div>
  );
};

export default Main;
