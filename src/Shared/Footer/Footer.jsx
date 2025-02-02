import React, { useEffect, useState } from "react";
import logo from "../../assets/images/trustedlogos/logo.png";
import b3 from "../../assets/images/backgrounds/WaveLinesDesktop1.svg";
import b4 from "../../assets/images/backgrounds/WaveLinesDesktop2.svg";
import b5 from "../../assets/images/backgrounds/WaveLinesDesktop3.svg";
import b6 from "../../assets/images/backgrounds/WaveLinesDesktop4.svg";
import b7 from "../../assets/images/backgrounds/WaveLinesMobile1.svg";
import b8 from "../../assets/images/backgrounds/WaveLinesMobile2.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -30]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);
  const {t} = useTranslation();

  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div
        style={{
          clipPath: isMd
            ? "polygon(0% 0%, 100% 75%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)",
        }}
        className="relative w-full h-auto md:h-[600px] flex flex-col md:flex-row max-sm:justify-center items-center text-center md:text-left px-6 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-700 to-blue-950 bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-20 max-w-screen-xl max-sm:mx-auto px-6 text-white py-16 md:py-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           {t("footerTitle")} 
          </h1>
          <p className="mt-4 text-lg md:text-xl">
           {t("footerDescription")} 
            the future.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-400 text-white text-lg font-medium rounded-md hover:bg-orange-500 transition duration-300 w-full md:w-auto">
           {t("footerButton")} 
          </button>
        </div>

        {/* Background Waves */}
        <div  data-aos="fade-right" className="absolute w-full inset-0 flex justify-end items-end overflow-hidden mix-blend-multiply z-10">
          {/* Desktop Waves */}
          <motion.img
            src={b3}
            alt="wave"
            className="absolute w-full bottom-0 right-0 hidden md:block"
            style={{ x: mouseX * 5, y: mouseY * 5 }}
          />
          <motion.img
            src={b4}
            alt="wave"
            className="absolute bottom-0 right-0 hidden md:block w-[1200px]"
            style={{ x: -mouseX * 5, y: -mouseY * 5 }}
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={b5}
            alt="wave"
            className="absolute w-3/5 bottom-0 right-0 hidden md:block"
            style={{ x: mouseX * 5, y: mouseY * 5 }}
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={b6}
            alt="wave"
            className="absolute bottom-0 right-0 w-3/5 max-w-none hidden md:block"
            style={{ x: mouseX * 2, y: -mouseY * 2 }}
          />

          {/* Mobile Waves */}
          <motion.img
            src={b7}
            alt="wave"
            className="absolute w-full bottom-0 right-0 md:hidden"
            style={{ x: mouseX * 5, y: mouseY * 5 }}
          />
          <motion.img
            src={b8}
            alt="wave"
            className="absolute w-5/4 bottom-0 right-0 md:hidden h-1/2"
            style={{ x: -mouseX * 5, y: -mouseY * 5 }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center bg-blue-950 px-6 py-11  border-t-[1px] border-sky-800">
        {/* Logo */}
        <img src={logo} alt="Logo" className="md:h-10  md:mx-40" />

        {/* Navigation Links */}
        <div className="max-sm:hidden flex items-center gap-6 text-cyan-400 text-lg">
          <h3 className="text-white font-medium relative">
            Our
            <span className="font-bold bg-blue-600 px-1 rounded-sm text-white">
              Solutions
            </span>
          </h3>
          <div className="h-6 w-[1px] bg-gray-500"></div>
          {/* Vertical Separator */}
          <h3 className="hover:text-cyan-300 transition duration-300">
          {t("footerLinkcs")}  
          </h3>
          <h3 className="hover:text-cyan-300 transition duration-300">
           {t("footerLinkbs")} 
          </h3>
          <h3 className="hover:text-cyan-300 transition duration-300">
           {t("footerLinkps")} 
          </h3>
        </div>
        <div className="flex items-center gap-6 text-3xl text-cyan-400 md:hidden">
          <h3 className="hover:text-blue-600  font-medium relative">
          <FaLinkedin />
          </h3>
          <h3 className="hover:text-blue-600 transition duration-300">
          <FaPhoneAlt />
          </h3>
          <h3 className="hover:text-blue-600  transition duration-300">
          <MdEmail />
          </h3>
        </div>
      </div>
      <footer className="md:px-36 footer sm:footer-horizontal text-neutral-content items-center p-4 bg-[#00152D] border-t-[1px] border-sky-800">
        <aside className="w-full flex justify-center md:justify-start">
          <p className="text-blue-500 text-center">
            © {new Date().getFullYear()} All rights reserved. Any Technology Pte
            Ltd.
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-center mx-auto">
          <a>Privacy Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
