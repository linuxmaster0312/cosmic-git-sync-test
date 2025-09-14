"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pt-24 px-4 overflow-hidden relative">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-yellow-400 rotate-45"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-red-500 border-4 border-black"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-500 border-4 border-black transform rotate-12"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Quirky Greeting */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block mb-8"
          >
            <div className="bg-black text-white px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_#FBBF24] transform rotate-3">
              <span className="font-bold text-sm tracking-wide">HELLO WORLD! 👋</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-black mb-6 leading-tight"
          >
            BOLD<span className="text-yellow-400">.</span><br />
            CREATIVE<span className="text-red-500">.</span><br />
            <span className="relative">
              SOFTWARE
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full h-2 bg-green-500 transform -skew-x-12"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft digital experiences with code, creativity, and a healthy dose of{" "}
            <span className="bg-yellow-400 px-2 py-1 border-2 border-black font-bold transform -rotate-1 inline-block">
              PERSONALITY
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#FBBF24] hover:shadow-[4px_4px_0px_0px_#FBBF24] transition-all duration-200 flex items-center gap-3"
            >
              VIEW MY WORK
              <Icon icon="material-symbols:arrow-right-alt" className="text-xl" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200"
            >
              SAY HELLO!
            </motion.button>
          </motion.div>

          {/* Quirky Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { number: "50+", label: "COMMITS", icon: "material-symbols:commit" },
              { number: "∞", label: "COFFEE CUPS", icon: "material-symbols:local-cafe" },
              { number: "42", label: "BUGS SQUASHED", icon: "material-symbols:bug-report" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000] min-w-[120px]"
              >
                <Icon icon={stat.icon} className="text-2xl text-black mx-auto mb-2" />
                <div className="font-bold text-2xl text-black">{stat.number}</div>
                <div className="text-xs font-bold text-neutral-600 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-4 border-black bg-white flex justify-center"
        >
          <div className="w-1 h-3 bg-black mt-2 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}