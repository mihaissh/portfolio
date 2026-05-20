import { useState } from "react";
import { projects } from "../lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "../components/Projects/ProjectModal";
import { Block } from "../components/Homepage/Block";
import { FiArrowUpRight, FiCalendar, FiFolder } from "react-icons/fi";

const parseProjectDate = (date) => {
  const match = date.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
};

const sortedProjects = [...projects].sort(
  (a, b) => parseProjectDate(b.date) - parseProjectDate(a.date) || b.id - a.id
);

const ProjectCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Block
        onClick={onClick}
        className="group relative h-full flex flex-col justify-between p-8 cursor-pointer overflow-hidden border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500"
      >
        <div className="absolute -right-4 -bottom-4 text-9xl text-white/[0.02] group-hover:text-emerald-500/[0.05] transition-colors duration-500 pointer-events-none">
          <FiFolder />
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              <FiCalendar className="text-emerald-500/50" />
              {project.date}
            </div>
            <div className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
              <FiArrowUpRight className="text-lg text-zinc-500 group-hover:text-black transition-colors" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
            {project.project}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {project.frontendStacks?.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-500 border border-zinc-700/30">
              {tech.name.replace(" Logo", "")}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
      </Block>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen w-full">
      <main className="mx-auto max-w-6xl px-4 py-24 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            THINGS I'VE <span className="text-zinc-600">BUILT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 max-w-2xl font-light leading-relaxed"
          >
            Client work, side projects, and stuff I built over the years.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((p, index) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={index}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        {...selectedProject}
      />
    </div>
  );
};
