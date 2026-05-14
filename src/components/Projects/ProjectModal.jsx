import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiGlobe, FiCalendar, FiCpu, FiLayout, FiBox, FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";

const TechTag = ({ tech }) => (
  <div className="flex items-center gap-2 bg-zinc-800/30 border border-zinc-700/30 rounded-xl px-3 py-2 backdrop-blur-md hover:bg-zinc-700/50 transition-all group/tag">
    <img
      src={tech.path}
      alt={tech.name}
      className="h-4 w-4 grayscale group-hover/tag:grayscale-0 transition-all duration-500"
      loading="lazy"
    />
    <span className="text-xs font-medium text-zinc-400 group-hover/tag:text-zinc-100 transition-colors">
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 shadow-2xl flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 h-10 w-10 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
            >
              <FiX size={18} />
            </button>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
              <div className="space-y-12">
                {/* Header */}
                <header>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                    <FiCalendar /> {date}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    {project}
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-2xl">
                    {longDescription}
                  </p>
                </header>

                {/* Grid Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-800/50 pt-12">
                  {/* Features */}
                  {features && features.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <FiLayout className="text-emerald-500" /> Key Features
                      </h3>
                      <ul className="space-y-4">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-400 group">
                            <span className="h-1 w-1 rounded-full bg-emerald-500/50 mt-2 group-hover:bg-emerald-400 transition-colors" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack */}
                  <div className="space-y-8">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <FiCpu className="text-emerald-500" /> Technology
                    </h3>
                    
                    <div className="space-y-6">
                      {frontendStacks?.length > 0 && (
                        <div className="space-y-3">
                          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Frontend</p>
                          <div className="flex flex-wrap gap-2">
                            {frontendStacks.map((tech, i) => <TechTag key={i} tech={tech} />)}
                          </div>
                        </div>
                      )}
                      
                      {backendStacks?.length > 0 && (
                        <div className="space-y-3">
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

            {/* Footer Actions */}
            <div className="p-6 md:p-8 bg-zinc-900/50 backdrop-blur-xl border-t border-zinc-800/50 flex flex-col sm:flex-row gap-4">
              {githubUrl && githubUrl !== "/" && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl border border-zinc-700/50 bg-zinc-800/30 text-zinc-400 font-bold hover:bg-zinc-800 hover:text-white transition-all group"
                >
                  <FiGithub className="text-xl group-hover:scale-110 transition-transform" />
                  View Source
                </a>
              )}
              {websiteUrl && websiteUrl !== "/" && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl bg-white text-black font-bold hover:bg-emerald-400 transition-all group shadow-xl"
                >
                  Live Preview
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
