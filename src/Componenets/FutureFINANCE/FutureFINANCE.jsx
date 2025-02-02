import { useTranslation } from "react-i18next";
import framers3 from "../../assets/images/frames/framers/c1.svg";
import framers4 from "../../assets/images/frames/framers/c2.avif";
import framers5 from "../../assets/images/frames/framers/c3.svg";
import framers6 from "../../assets/images/frames/framers/c4.svg";
import framers7 from "../../assets/images/frames/framers/finance-figure-svg1.svg";


import { motion } from "framer-motion";

const   FutureFINANCE = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 mt-10 px-6">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 text-start ">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider ">
        {t("future")} 
        </h2>
        <h1 className="text-3xl md:text-7xl text-blue-950 font-semibold  ">
        {t("futureTitle")} 
        </h1>
        <div className="md:w-1/2 relative md:hidden mt-28">
        <motion.img
          className="  absolute -top-20 -z-10"
          src={framers7}  
          animate={{ y: [0, -10, 0] }} // Floating effect
          transition={{
            duration: 5, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        ></motion.img>
          {/* Main Image */}
          <motion.img
            src={framers4}
            alt="Finance"
            className="w-[76%] h-auto mx-auto shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating Icons */}
          <motion.img
            src={framers3}
            alt="Icon"
            className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl "
            animate={{ y: [0, -10, 0] }} // Floating effect only
            transition={{
              duration: 10, // Time for one complete up-down cycle
              repeat: Infinity, // Infinite looping
              repeatType: "mirror", // Moves back and forth smoothly
            }}
          />
          <motion.img
            src={framers5}
            alt="Icon"
            className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }} // Floating effect only
            transition={{
              duration: 15, // Time for one complete up-down cycle
              repeat: Infinity, // Infinite looping
              repeatType: "mirror", // Moves back and forth smoothly
            }}
          />

          <motion.img
            src={framers6}
            alt="Icon"
            className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }} // Floating effect only
            transition={{
              duration: 10, // Time for one complete up-down cycle
              repeat: Infinity, // Infinite looping
              repeatType: "mirror", // Moves back and forth smoothly
            }}
          />

          {/* Decorative Elements */}
        </div>
        <p className="text-blue-900 font-bold mt-10 w-4/5">
        {t("futureDes")}   
        </p>
        <p className="text-gray-700 mt-6">
        {t("futurePra")}
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 relative max-sm:hidden">
        <motion.img
          className="max-sm:hidden absolute -top-24 -z-10"
          src={framers7}  
          animate={{ y: [0, -10, 0] }} // Floating effect
          transition={{
            duration: 5, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        ></motion.img>
        {/* Main Image */}
        <motion.img
          src={framers4}
          alt="Finance"
          className="w-[76%] h-auto mx-auto shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating Icons */}
        <motion.img
          src={framers3}
          alt="Icon"
          className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }} // Floating effect only
          transition={{
            duration: 10, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        />
        <motion.img
          src={framers5}
          alt="Icon"
          className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }} // Floating effect only
          transition={{
            duration: 15, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        />

        <motion.img
          src={framers6}
          alt="Icon"
          className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }} // Floating effect only
          transition={{
            duration: 10, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        />

        {/* Decorative Elements */}
      </div>
   
    </div>
  );
};

export default FutureFINANCE;
