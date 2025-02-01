import framers2 from "../../assets/images/frames/framers/3.svg";
import framers3 from "../../assets/images/frames/framers/c1.svg";
import framers4 from "../../assets/images/frames/framers/c2.avif";
import framers5 from "../../assets/images/frames/framers/c3.svg";
import framers6 from "../../assets/images/frames/framers/c4.svg";

import { motion } from "framer-motion";

const FutureFINANCE = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 mt-10 px-6">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider ">
          Powering the Future of Finance
        </h2>
        <h1 className="text-5xl md:text-7xl text-blue-950 font-semibold  ">
          Uncovering new ways to delight customers
        </h1>
        <div className="md:w-1/2 relative md:hidden">
          {/* Main Image */}
          <motion.img
            src={framers4}
            alt="Finance"
            className="w-[76%] h-auto mx-auto rounded-lg shadow-xl"
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
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-gray-700 mt-6">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 relative max-sm:hidden">
        <div
          className="max-sm:hidden absolute -top-20 -left-20 w-[400px] h-[140px] bg-gradient-to-r from-blue-300 via-blue-100 to-white rotate-[-220deg] -z-10"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 35% 100%)",
          }}
          animate={{ y: [0, -10, 0] }} // Floating effect only
          transition={{
            duration: 5, // Time for one complete up-down cycle
            repeat: Infinity, // Infinite looping
            repeatType: "mirror", // Moves back and forth smoothly
          }}
        ></div>
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
