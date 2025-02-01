import React, { useState } from "react";
import logo from "../../assets/images/icon/easy-banking/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="group relative w-full whitespace-nowrap group lg:py-3 lg:px-6   transition-all duration-500 cursor-pointer">
        <NavLink
          to="/services"
          className="font-bold text-white hover:text-white-600 cursor-pointer"
        >
          Services
        </NavLink>
        <ul className="absolute left-0 hidden group-hover:block bg-gray-100 p-2 rounded-sm shadow-md w-64 mt-2">
          <li>
            <NavLink
              to="/anycaas"
              className="text-black hover:text-white-600 block p-2"
            >
              AnyCaaS
            </NavLink>
          </li>
          <div className="border-t border-gray-300 my-1"></div>
          <li>
            <NavLink
              to="/anybaas"
              className="text-black hover:text-white-600 block p-2"
            >
              AnyBaaS
            </NavLink>
          </li>
          <div className="border-t border-gray-300 my-1"></div>
          <li>
            <NavLink
              to="/anypaas"
              className="text-black hover:border-b-2 border-white block p-2"
            >
              AnyPaaS
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="w-full  whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className="font-bold text-white hover:text-white-600 cursor-pointer"
          to="/Services"
        >
          Services
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className="font-bold text-white hover:text-white-600 cursor-pointer"
          to="/About Us"
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto md:fixed navbar bg-transparent max-sm:bg-blue-500 z-50">
      <div className=" navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
         <div className="">
         <img className="md:mx-40 w-40" src={logo} alt="" />
         </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact Us </a>
      </div>
    </div>
  );
};

export default Navbar;
