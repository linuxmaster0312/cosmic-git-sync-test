"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export interface ProjectData {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  liveLink: string;
  thumbnail: string;
  color: "yellow" | "red" | "green" | "blue" | "purple";
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const colorVariants = {
  yellow: {
    bg: "bg-yellow-400",
    border: "border-yellow-400",
    shadow: "shadow-[8px_8px_0px_0px_#FBBF24]",
    hoverShadow: "hover:shadow-[4px_4px_0px_0px_#FBBF24]",
    accent: "text-yellow-400"
  },
  red: {
    bg: "bg-red-500",
    border: "border-red-500",
    shadow: "shadow-[8px_8px_0px_0px_#EF4444]",
    hoverShadow: "hover:shadow-[4px_4px_0px_0px_#EF4444]",
    accent: "text-red-500"
  },
  green: {
    bg: "bg-green-500",
    border: "border-green-500",
    shadow: "shadow-[8px_8px_0px_0px_#22C55E]",
    hoverShadow: "hover:shadow-[4px_4px_0px_0px_#22C55E]",
    accent: "text-green-500"
  },
  blue: {
    bg: "bg-blue-500",
    border: "border-blue-500",
    shadow: "shadow-[8px_8px_0px_0px_#3B82F6]",
    hoverShadow: "hover:shadow-[4px_4px_0px_0px_#3B82F6]",
    accent: "text-blue-500"
  },
  purple: {
    bg: "bg-purple-500",
    border: "border-purple-500",
    shadow: "shadow-[8px_8px_0px_0px_#A855F7]",
    hoverShadow: "hover:shadow-[4px_4px_0px_0px_#A855F7]",
    accent: "text-purple-500"
  }
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const colors = colorVariants[project.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
      className={`bg-white border-4 border-black ${colors.shadow} ${colors.hoverShadow} transition-all duration-300 group cursor-pointer`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Quirky Corner Element */}
        <div className={`absolute -top-2 -right-2 w-8 h-8 ${colors.bg} border-2 border-black rotate-45`}></div>
      </div>

      <div className="p-6">
        {/* Project Name with Quirky Underline */}
        <div className="relative mb-4">
          <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
          <div className={`absolute -bottom-1 left-0 w-20 h-1 ${colors.bg} transform -skew-x-12`}></div>
        </div>

        {/* Description */}
        <p className="text-neutral-700 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-black mb-2 tracking-wider">TECH STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.05 }}
                className={`px-2 py-1 bg-black text-white text-xs font-medium border-2 border-black ${colors.shadow} transform ${
                  techIndex % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0 transition-transform duration-200`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 bg-black text-white py-2 px-4 border-2 border-black font-bold text-center ${colors.shadow} hover:${colors.hoverShadow} transition-all duration-200 flex items-center justify-center gap-2`}
          >
            <span>VIEW LIVE</span>
            <Icon icon="gg:external" className="text-sm" />
          </motion.a>
          
          {/* Quirky Info Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 ${colors.bg} border-2 border-black flex items-center justify-center ${colors.shadow} hover:${colors.hoverShadow} transition-all duration-200`}
          >
            <Icon icon="material-symbols:info" className="text-black text-lg" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <Icon icon="material-symbols:code-rounded" className="text-4xl text-black" />
      </div>
    </motion.div>
  );
}