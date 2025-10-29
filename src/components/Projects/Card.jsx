import { useState } from "react";
import { Link } from "react-router-dom";

import { Corners } from "./Corners";
import { FiGithub, FiGlobe, FiCalendar } from "react-icons/fi";
import { ProjectModal } from "./ProjectModal";

export const Card = ({
  src,
  date,
  project,
  videoUrl,
  features,
  githubUrl,
  websiteUrl,
  backendStacks,
  frontendStacks,
  shortDescription,
  longDescription,
  clientLibraries,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <aside
        onClick={() => setIsModalOpen(true)}
        className="group border relative cursor-pointer flex h-56 flex-col justify-center overflow-hidden p-6 transtion-colors hover:bg-neutral-950 md:h-80 md:p-9"
      >
        <aside className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-zinc-400 transition-colors duration-500 group-hover:text-zinc-50">
          <FiCalendar className="text-base" />
          <span>{date}</span>
        </aside>
        <h2 className="relative z-10 font-medium text-xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
          <span className="font-bold text-3xl underline">{project}</span>{" "}
          {shortDescription}
        </h2>
        <aside className="absolute flex items-center gap-4 right-3 top-4 z-10 text-2xl text-zinc-400 transition-colors group-hover:text-zinc-50">
          <Link to={githubUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
            <FiGithub className="text-base hover:text-emerald-300 transition-all" />
          </Link>
          <Link to={websiteUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
            <FiGlobe className="text-base hover:text-emerald-300 transition-all" />
          </Link>
        </aside>
        <img
          className="absolute h-full bg-cover bg-center bottom-0 left-0 right-0 top-0 opacity-0 blur-sm grayscale transition-all group-hover:opacity-10 group-active:scale-105 group-active:opacity-30 group-active:blur-sm group-active:grayscale-0"
          src={src}
          alt="Background Image"
          loading="lazy"
        />
        <Corners />
      </aside>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
        date={date}
        features={features}
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
        backendStacks={backendStacks}
        frontendStacks={frontendStacks}
        clientLibraries={clientLibraries}
        longDescription={longDescription}
      />
    </>
  );
};
