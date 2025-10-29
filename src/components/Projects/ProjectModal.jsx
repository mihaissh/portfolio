import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-lg bg-zinc-900 border border-zinc-700 p-6 md:p-8 shadow-xl my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
            >
              <FiX size={24} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold text-zinc-100">
                  {project}
                </h2>
                <div className="flex items-center gap-3 ml-auto">
                  <Link 
                    to={githubUrl} 
                    target="_blank"
                    className="text-zinc-400 hover:text-emerald-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={20} />
                  </Link>
                  <Link 
                    to={websiteUrl} 
                    target="_blank"
                    className="text-zinc-400 hover:text-emerald-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGlobe size={20} />
                  </Link>
                </div>
              </div>
              <p className="text-sm text-zinc-500">{date}</p>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                  About
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {longDescription}
                </p>
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-zinc-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stacks */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-zinc-200 mb-3">
                  Technology Stack
                </h3>
                
                {/* Frontend */}
                {frontendStacks && frontendStacks.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 mb-2">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {frontendStacks.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 hover:border-zinc-600 transition-colors"
                        >
                          <img
                            src={tech.path}
                            alt={tech.name}
                            className="h-5 w-5"
                            loading="lazy"
                          />
                          <span className="text-xs text-zinc-300">
                            {tech.name.replace(" Logo", "")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Backend */}
                {backendStacks && backendStacks.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 mb-2">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {backendStacks.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 hover:border-zinc-600 transition-colors"
                        >
                          <img
                            src={tech.path}
                            alt={tech.name}
                            className="h-5 w-5"
                            loading="lazy"
                          />
                          <span className="text-xs text-zinc-300">
                            {tech.name.replace(" Logo", "")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Libraries/Tools */}
                {clientLibraries && clientLibraries.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 mb-2">
                      Tools & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {clientLibraries.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 hover:border-zinc-600 transition-colors"
                        >
                          <img
                            src={tech.path}
                            alt={tech.name}
                            className="h-5 w-5"
                            loading="lazy"
                          />
                          <span className="text-xs text-zinc-300">
                            {tech.name.replace(" Logo", "")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer - Action Buttons */}
            <div className="flex gap-3 pt-6 mt-6 border-t border-zinc-800">
              {githubUrl && githubUrl !== "/" && (
                <Link
                  to={githubUrl}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 rounded border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:border-zinc-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub /> View Code
                </Link>
              )}
              {websiteUrl && websiteUrl !== "/" && (
                <Link
                  to={websiteUrl}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 rounded bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGlobe /> Visit Website
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

