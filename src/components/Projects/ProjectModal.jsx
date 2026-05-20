import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiCalendar, FiCpu, FiLayout, FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";

const TechTag = ({ tech }) => (
  <div className="flex items-center gap-1.5 bg-zinc-800/30 border border-zinc-700/30 rounded-lg px-2.5 py-1.5 backdrop-blur-md hover:bg-zinc-700/50 transition-all group/tag">
    <img
      src={tech.path}
      alt={tech.name}
      className="h-3.5 w-3.5 grayscale group-hover/tag:grayscale-0 transition-all duration-500"
      loading="lazy"
    />
    <span className="text-[11px] font-medium text-zinc-400 group-hover/tag:text-zinc-100 transition-colors">
      {tech.name.replace(" Logo", "")}
    </span>
  </div>
);

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
  date,
  features,
  githubUrl,
  websiteUrl,
  backendStacks,
  frontendStacks,
  clientLibraries,
  longDescription,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50 shadow-2xl flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 h-8 w-8 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
            >
              <FiX size={16} />
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
              <div className="space-y-8">
                <header>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
                    <FiCalendar /> {date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                    {project}
                  </h2>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-xl">
                    {longDescription}
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-800/50 pt-8">
                  {features && features.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <FiLayout className="text-emerald-500" /> Features
                      </h3>
                      <ul className="space-y-3">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-400 group">
                            <span className="h-1 w-1 rounded-full bg-emerald-500/50 mt-2 group-hover:bg-emerald-400 transition-colors" />
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-6">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <FiCpu className="text-emerald-500" /> Technology
                    </h3>
                    
                    <div className="space-y-4">
                      {frontendStacks?.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Frontend</p>
                          <div className="flex flex-wrap gap-2">
                            {frontendStacks.map((tech, i) => <TechTag key={i} tech={tech} />)}
                          </div>
                        </div>
                      )}
                      
                      {backendStacks?.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Backend</p>
                          <div className="flex flex-wrap gap-2">
                            {backendStacks.map((tech, i) => <TechTag key={i} tech={tech} />)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 bg-zinc-900/50 backdrop-blur-xl border-t border-zinc-800/50 flex flex-col sm:flex-row gap-3">
              {githubUrl && githubUrl !== "/" && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl border border-zinc-700/50 bg-zinc-800/30 text-zinc-400 text-sm font-bold hover:bg-zinc-800 hover:text-white transition-all group"
                >
                  <FiGithub className="text-lg group-hover:scale-110 transition-transform" />
                  View Source
                </a>
              )}
              {websiteUrl && websiteUrl !== "/" && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-emerald-400 transition-all group shadow-xl"
                >
                  Live Preview
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
