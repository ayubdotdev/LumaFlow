"use client";

import Image from "next/image";
import { easeIn, easeOut, motion, scale } from "framer-motion";

export default function Home() {

  const subtleFadeIn = {
    hidden: {
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden"
      style={{ backgroundImage: 'url("/bgfinal.png")' }}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Mobile and Tablet "No preview available" message */}
      <div className="lg:hidden  flex items-center justify-center h-screen bg-black/50 backdrop-blur-sm">
        <motion.div
          className="text-center p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white font-bold text-2xl mb-4 ">LumaFlow</div>
          <div className="text-white/80 text-lg mb-2">No preview available</div>
          <p className="text-white/60 text-sm">
            Please view this site on a desktop for the best experience
          </p>
        </motion.div>
      </div>

      {/* Desktop content */}
      <div className="hidden lg:flex lg:flex-col lg:h-full">
        {/* Navbar */}
        <motion.nav
          className="grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto px-8 py-6 w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <div className="flex justify-start pl-27">
            <div className="flex justify-start">
              <motion.div
                // 1. Added flex utilities to align items horizontally
                className="flex items-center  text-white font-bold text-xl tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                {/* 2. Removed incorrect classes from the Image component */}
                <Image src={"/flogo.png"} alt="logo" width={35} height={35} />
                <span>LumaFlow</span>
              </motion.div>
            </div>
          </div>

          {/* Centered Nav Links - Staggering removed */}
          <ul className="flex justify-center space-x-10 text-white/80 font-medium">
            {["Home", "Features", "Workflows", "Pricing"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -3, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex pr-30 justify-end">
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold px-3 py-1 rounded-lg shadow-lg ring-2 ring-blue-500/50 shadow-blue-500/40 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col items-center justify-center flex-1 text-center px-4 py-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
            variants={fadeInUp}
          >
            Unlock Speed
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Automate with LumaFlow
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            LumaFlow empowers teams to automate tasks and streamline workflows —
            enhancing collaboration through automation.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-blue-800 font-semibold px-7 py-3 rounded-xl shadow-md ring-1 ring-blue-300 transition-all duration-300 transform mb-12"
            variants={subtleFadeIn}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            >
            Book a Demo
          </motion.button>

          <motion.div
            className="relative bottom-4 w-[550px] h-[730px] overflow-hidden bg-transparent rounded-2xl shadow-2xl"
            // Custom animation variant for the image
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/iphonemockup.png"
              alt="iPhone Mockup showing LumaFlow automation dashboard"
              width={550}
              height={1000}
              className="absolute top-0 left-0 rounded-2xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/60 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}