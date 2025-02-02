import React, { useEffect, useState } from "react";
import logo from "../../assets/images/icon/easy-banking/logo.svg";
import logo1 from "../../assets/images/trustedlogos/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [navbarVisible, setNavbarVisible] = useState(true); // To control navbar visibility
  const [navColor, setNavColor] = useState("bg-transparent"); // Navbar background color
  const [textColor, setTextColor] = useState("text-white"); // Navbar text color
  const [buttonColor, setButtonColor] = useState("bg-transparent"); // Button color
  const [logoVisible, setLogoVisible] = useState(logo); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Track scroll direction and apply styles dynamically
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Change logo based on scroll position
      if (currentScrollY > 0) {
        setLogoVisible(logo1); // Show logo1 when scrolled down
      } else {
        setLogoVisible(logo); // Show logo when at top
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setNavbarVisible(false); // Hide navbar when scrolling down
        setNavColor("bg-white"); // Solid background when scrolling down
        setTextColor("text-white"); // Keep text color white when scrolling down
        setButtonColor("bg-transparent"); // Keep button transparent
      } else {
        // Scrolling up
        setNavbarVisible(true); // Show navbar when scrolling up
        setNavColor(currentScrollY === 0 ? "bg-transparent" : "bg-white"); // Transparent at top, else white
        setTextColor(currentScrollY === 0 ? "text-white" : "text-blue-500"); // Keep text white at top, else blue when scrolling up
        setButtonColor(currentScrollY === 0 ? "bg-transparent text-white" : "bg-orange-400 text-white"); // Change button color to orange when scrolling up
      }
      setLastScrollY(currentScrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const links = (
    <>
      <li className="group relative w-full whitespace-nowrap group lg:py-3 lg:px-6 transition-all duration-500 cursor-pointer">
        <NavLink
          to="/services"
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
        >
          {t("services")} {/* Change to t('services') */}
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
      <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
          to="/services"
        >
          {t("services")} {/* Change to t('services') */}
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
          to="/about-us"
        >
          {t("aboutUs")} {/* Change to t('aboutUs') */}
        </NavLink>
      </li>
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border bg-transparent ${textColor} font-bold transition-all ${buttonColor}`}
        >
          <FiGlobe size={18} />
          EN
          {isOpen ? (
            <span className="ml-1">
              <IoIosArrowUp />
            </span>
          ) : (
            <span className="ml-1">
              <IoIosArrowDown />
            </span>
          )}
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-md p-2">
            <li
              onClick={() => changeLanguage("en")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
            >
              EN (English)
            </li>
            <li
              onClick={() => changeLanguage("th")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
            >
              TH (Thai)
            </li>
            <li
              onClick={() => changeLanguage("id")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
            >
              ID (Bahasa Indonesia)
            </li>
            <li
              onClick={() => changeLanguage("tw")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              TW (Traditional Chinese)
            </li>
          </ul>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`md:fixed navbar w-full ${navColor} z-50 transition-all duration-300 ${
        navbarVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto navbar-start">
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
        <Link to="/">
          <div className="w-40">
            <img className="md:mx-40 w-40" src={logoVisible} alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg btn-outline ${buttonColor} border-white hover:text-blue-500`}>
          {t("contactUs")} <MdOutlineKeyboardArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
