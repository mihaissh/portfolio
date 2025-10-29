import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export const ProjectModal = ({ path, skills, isOpen, setIsOpen }) => {
  const isPdf = path.includes(".pdf");

  // Prevent background scroll when modal is open
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-zinc-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-800 text-zinc-50 p-6 rounded-lg w-full h-[75vh] max-w-3xl shadow-xl cursor-default relative overflow-y-scroll"
          >
            <div className="relative z-10 h-full w-full">
              {isPdf ? (
                <embed
                  id="pdf-embed"
                  src={path}
                  type="application/pdf"
                  className="object-cover h-full w-full"
                />
              ) : (
                <img
                  src={path}
                  alt="project"
                  className="object-contain h-full w-full"
                />
              )}
            </div>
            <h1 className="text-4xl font-bold text-zinc-50 py-4">
              What I learned?
            </h1>
            <ul className="ml-4 flex flex-col space-y-1">
              {skills.map((s, i) => (
                <li key={i} className="text-sm text-zinc-200 list-disc">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
