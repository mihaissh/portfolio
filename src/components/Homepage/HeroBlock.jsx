import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const HeroBlock = () => {
  return (
    <div className="col-span-12 mb-12 flex flex-col items-start justify-center px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/optimized/profile-64w.webp 1x, /optimized/profile-128w.webp 2x, /optimized/profile-192w.webp 3x"
          />
          <source
            type="image/jpeg"
            srcSet="/optimized/profile-64w.jpg 1x, /optimized/profile-128w.jpg 2x, /optimized/profile-192w.jpg 3x"
          />
          <img
            src="/optimized/profile-64w.jpg"
            alt="Profile Picture"
            className="mb-6 size-20 rounded-2xl object-cover ring-2 ring-emerald-500/20"
            width="80"
            height="80"
            loading="eager"
          />
        </picture>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
      >
        MIHAI <span className="text-zinc-600">STRACULENCU</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed"
      >
        I build things that solve problems. <span className="text-zinc-500">Frontend developer focused on creating clean, functional, and impactful digital solutions.</span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <Link
          to="/projects"
          className="group flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-emerald-400 active:scale-95 shadow-lg shadow-white/5"
        >
          View Work <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/about-me"
          className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-md px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-zinc-800 active:scale-95"
        >
          About Me
        </Link>
      </motion.div>
    </div>
  );
};
