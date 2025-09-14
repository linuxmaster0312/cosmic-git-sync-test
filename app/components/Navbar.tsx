"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_#FBBF24] rounded-none p-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-yellow-400 border-2 border-black flex items-center justify-center rotate-45">
              <Icon icon="material-symbols:code" className="text-black text-lg -rotate-45" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              DEV<span className="text-yellow-400">FOLIO</span>
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              PROJECTS
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              ABOUT
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-4 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200"
            >
              CONTACT
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white text-2xl"
          >
            <Icon icon="material-symbols:menu" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}