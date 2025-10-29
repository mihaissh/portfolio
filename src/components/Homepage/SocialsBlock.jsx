import { Block } from "./Block";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";

export const SocialsBlock = () => {
  return (
    <>
      <Block className="col-span-6 bg-blue-500 md:col-span-3 hover:scale-105 hover:rotate-2 transition-transform duration-200">
        <a
          href="https://www.linkedin.com/in/straculencu-mihai/"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
          aria-label="Visit my LinkedIn profile"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block className="col-span-6 bg-neutral-800 md:col-span-3 hover:scale-105 hover:-rotate-2 transition-transform duration-200">
        <a
          href="https://github.com/mihaissh"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
          aria-label="Visit my GitHub profile"
        >
          <SiGithub />
        </a>
      </Block>
      <Block className="col-span-6 bg-green-600 md:col-span-3 hover:scale-105 hover:-rotate-2 transition-transform duration-200">
        <Link
          to="/projects"
          className="grid h-full place-content-center text-3xl text-white"
          aria-label="View my projects"
        >
          <FiGrid />
        </Link>
      </Block>
      <Block className="col-span-6 bg-rose-500 md:col-span-3 hover:scale-105 hover:rotate-2 transition-transform duration-200">
        <Link
          to="*"
          className="grid h-full place-content-center text-3xl text-white"
          aria-label="View roadmap"
        >
          <GoProjectRoadmap />
        </Link>
      </Block>
    </>
  );
};
