import { Block } from "./Block";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";

export const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="https://www.linkedin.com/in/straculencu-mihai/"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-neutral-800 md:col-span-3"
      >
        <a
          href="https://github.com/mihaissh"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <Link
          to="/projects"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FiGrid />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-rose-500 md:col-span-3"
      >
        <Link
          to="*"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <GoProjectRoadmap />
        </Link>
      </Block>
    </>
  );
};
