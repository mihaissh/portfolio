import { useState } from "react";

import { Corners } from "./Corners";
import { FiGithub, FiGlobe, FiCalendar } from "react-icons/fi";
import { ProjectModal } from "./ProjectModal";

export const Card = ({
  src,
  date,
  project,
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
        className="group border relative cursor-pointer flex h-56 flex-col justify-center overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9"
      >
        <aside className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-zinc-400 transition-colors duration-500 group-hover:text-zinc-50">
          <FiCalendar className="text-base" />
          <span>{date}</span>
        </aside>
        <h2 className="relative z-10 text-center font-semibold text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
          <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent underline decoration-emerald-400/60 decoration-2 underline-offset-4 drop-shadow-sm">
            {project}
          </span>
        </h2>
        <aside className="absolute flex items-center gap-4 right-3 top-4 z-10 text-2xl text-zinc-400 transition-colors group-hover:text-zinc-50">
          {githubUrl && githubUrl !== "/" && (
            <a href={githubUrl} target="_blank" rel="noreferrer nofollow" onClick={(e) => e.stopPropagation()}>
              <FiGithub className="text-base hover:text-emerald-300 transition-all" />
            </a>
          )}
          {websiteUrl && websiteUrl !== "/" && (
            <a href={websiteUrl} target="_blank" rel="noreferrer nofollow" onClick={(e) => e.stopPropagation()}>
              <FiGlobe className="text-base hover:text-emerald-300 transition-all" />
            </a>
          )}
        </aside>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-35 group-active:opacity-50"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/50 via-cyan-400/40 to-emerald-400/50" />
        </div>
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
