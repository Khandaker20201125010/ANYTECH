import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <details
          className=""
          data-tip="Solutions"
        >
          <summary className="font-bold text-white hover:text-yellow-600 cursor-pointer">
            Solutions
          </summary>
          <ul className="p-2 bg-gray-800 rounded-md">
            <li>
              <NavLink
                to="/anycaas"
                className="text-white hover:text-yellow-600"
              >
                AnyCaaS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/anybaas"
                className="text-white hover:text-yellow-600"
              >
                AnyBaaS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/anypaas"
                className="text-white hover:text-yellow-600"
              >
                AnyPaaS
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink
          data-tip="Our Collections"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-yellow-600 hover:text-yellow-700  "
              : "font-bold text-white hover:text-yellow-600  "
          }
          to="/allCollections"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          data-tip="Our Collections"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-yellow-600 hover:text-yellow-700  "
              : "font-bold text-white hover:text-yellow-600  "
          }
          to="/Contacts"
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2">
                <li>
                  <a>AnyCaaS</a>
                </li>
                <li>
                  <a>AnyBaaS</a>
                </li>
                <li>
                  <a>AnyPaaS</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
