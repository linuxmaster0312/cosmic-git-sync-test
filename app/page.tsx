"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import HeroSection from "@/app/components/HeroSection";
import ProjectCard, { ProjectData } from "@/app/components/ProjectCard";

// Sample project data - easily replaceable with real data
const sampleProjects: ProjectData[] = [
  {
    id: 1,
    name: "TaskMaster Pro",
    description: "A powerful task management application with real-time collaboration, drag-and-drop functionality, and smart notifications.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "https://example.com/taskmaster",
    thumbnail: "https://images.unsplash.com/photo-1577426710619-87a12693779f",
    color: "yellow"
  },
  {
    id: 2,
    name: "CodeSynth AI",
    description: "An AI-powered code generation tool that helps developers write better code faster with intelligent suggestions and automated refactoring.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React"],
    liveLink: "https://example.com/codesynth",
    thumbnail: "https://images.unsplash.com/photo-1580377968242-daed42865732",
    color: "red"
  },
  {
    id: 3,
    name: "GeoViz Dashboard",
    description: "Interactive data visualization platform for geographic data with real-time updates and customizable mapping layers.",
    techStack: ["D3.js", "Vue.js", "PostgreSQL", "Express"],
    liveLink: "https://example.com/geoviz",
    thumbnail: "https://images.unsplash.com/photo-1578589317915-00ac3b1e5e2d",
    color: "green"
  },
  {
    id: 4,
    name: "CloudSync Manager",
    description: "A comprehensive cloud infrastructure management tool with automated scaling, monitoring, and cost optimization features.",
    techStack: ["Go", "Docker", "Kubernetes", "AWS"],
    liveLink: "https://example.com/cloudsync",
    thumbnail: "https://images.unsplash.com/photo-1578589318274-02854f68813e",
    color: "blue"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-neutral-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-40 h-40 border-8 border-black transform rotate-12"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 border-8 border-black"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Quirky Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <div className="bg-red-500 text-white px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000] transform -rotate-3">
                <span className="font-bold text-sm tracking-wider flex items-center gap-2">
                  <Icon icon="material-symbols:code-rounded" />
                  FEATURED PROJECTS
                </span>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              THINGS I&apos;VE <span className="text-red-500">BUILT</span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className="inline-block ml-2"
              >
                <div className="w-8 h-8 bg-yellow-400 border-2 border-black transform rotate-45 inline-block" />
              </motion.span>
            </h2>
            
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              A collection of projects showcasing my passion for{" "}
              <span className="bg-green-500 text-white px-2 py-1 border-2 border-black font-bold transform rotate-1 inline-block">
                CLEAN CODE
              </span>{" "}
              and innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#22C55E] hover:shadow-[4px_4px_0px_0px_#22C55E] transition-all duration-200 flex items-center gap-3 mx-auto"
            >
              VIEW ALL PROJECTS
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon="material-symbols:arrow-right-alt" className="text-xl" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
              ABOUT <span className="text-blue-500">ME</span>
            </h2>
            
            <div className="relative">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                I&apos;m a passionate software developer who believes that great code should be both{" "}
                <span className="bg-yellow-400 px-2 py-1 border-2 border-black font-bold">FUNCTIONAL</span>{" "}
                and{" "}
                <span className="bg-red-500 text-white px-2 py-1 border-2 border-black font-bold">BEAUTIFUL</span>.
                <br /><br />
                When I&apos;m not crafting digital experiences, you&apos;ll find me exploring new technologies, 
                contributing to open source, or probably drinking way too much coffee.
              </p>
              
              {/* Quirky Elements */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 border-2 border-black"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200"
            >
              LET&apos;S CONNECT!
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                READY TO <span className="text-yellow-400">BUILD</span> SOMETHING AMAZING?
              </h3>
              <p className="text-neutral-300 mb-8">
                Let&apos;s turn your ideas into reality with code that&apos;s both powerful and playful.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 border-4 border-yellow-400 font-bold text-lg shadow-[8px_8px_0px_0px_#FFF] hover:shadow-[4px_4px_0px_0px_#FFF] transition-all duration-200"
              >
                GET IN TOUCH
              </motion.button>
            </div>
            
            <div className="border-t-4 border-white pt-8">
              <p className="text-sm text-neutral-400">
                © 2024 DEVFOLIO. Made with{" "}
                <span className="text-red-500">❤</span>{" "}
                and a lot of{" "}
                <span className="text-yellow-400">☕</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 right-4 w-16 h-16 border-4 border-white opacity-20"
        />
      </footer>
    </div>
  );
}