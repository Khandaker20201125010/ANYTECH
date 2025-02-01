import React, { useEffect, useState } from "react";
import w1 from "../../assets/images/backgrounds/ctaMobileWaveLines.svg";
import b1 from "../../assets/images/backgrounds/bannerimg.avif";
import b3 from "../../assets/images/backgrounds/WaveLinesDesktop1.svg";
import b4 from "../../assets/images/backgrounds/WaveLinesDesktop2.svg";
import b5 from "../../assets/images/backgrounds/WaveLinesDesktop3.svg";
import b6 from "../../assets/images/backgrounds/WaveLinesDesktop4.svg";
import b7 from "../../assets/images/backgrounds/WaveLinesMobile1.svg";
import b8 from "../../assets/images/backgrounds/WaveLinesMobile2.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -30]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

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
    <div
      style={{
        clipPath:isMd ?  "polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
      }}
      className="relative w-full max-sm:min-h-screen h-screen flex flex-col md:flex-row max-sm:justify-center items-center text-center md:text-left px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-50  "></div>

      <div className="relative z-20 max-w-md md:max-w-2xl px-6 md:px-12 text-white max-sm:mt-44 0">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-sm:text-start">
          Embrace the future of finance
        </h1>
        <p className="mt-4 text-lg md:text-xl  max-sm:text-start w-[110%] ">
          Reimagine financial services with AnyTech’s open platform, 
          distributed banking solution that powers transformation.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-400 text-white text-lg font-medium rounded-md hover:bg-orange-500 transition duration-300 max-sm:w-full">
          Reach Out to Us →
        </button>
      </div>

      {/* Right Image */}
      <motion.div className="md:absolute md:top-0 md:right-0 h-full md:w-2/3 relative w-5/4 mt-6 md:mt-0">
        <img
          src={b1}
          alt="banner"
          className="w-full h-full object-cover"
          style={{
            clipPath: isMd
              ? "polygon(66% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)"  ,
          }}
        />
       
      </motion.div>

      {/* Wave SVGs inside banner with motion effect */}
      <div className="absolute w-full inset-0 flex justify-center items-center overflow-hidden mix-blend-multiply z-10">
        <motion.img
          src={b3}
          alt="wave"
          className="absolute w-full top-10 right-10 hidden md:block"
          style={{ x: mouseX * 5, y: mouseY * 5 }}
        />

        <motion.img
          src={b4}
          alt="wave"
          className="absolute bottom-72 -right-12  hidden md:block  w-[1200ox]"
          style={{ x: -mouseX * 5, y: -mouseY * 5 }}
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={b5}
          alt="wave"
          className="absolute w-3/5 -top-0 -left-40 hidden md:block  "
          style={{ x: mouseX * 5, y: mouseY * 5 }}
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={b6}
          alt="wave"
          className="absolute top-10 -left-20 w-3/5 max-w-none hidden md:block"
          style={{ x: mouseX * 2, y: -mouseY * 2 }}
        />
        <motion.img
          src={b7}
          alt="wave"
          className="absolute w-full bottom-0 right-0 md:hidden"
          style={{ x: mouseX * 5, y: mouseY * 5 }}
        />
        <motion.img
          src={b8}
          alt="wave"
          className="absolute w-5/4 top-0 right-0 md:hidden  h-1/2"
          style={{ x: -mouseX * 5, y: -mouseY * 5 }}
        />
      </div>
    </div>
  );
};

export default Banner;
