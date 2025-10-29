import { Block } from "./Block";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";

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
          <img
            src="https://api.iconify.design/line-md:github-loop.svg?color=%23f0f0f0"
            className="w-10 h-10"
          ></img>
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <a
          href="/projects"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FiGrid />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-rose-500 md:col-span-3"
      >
        <a
          href="/error"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <GoProjectRoadmap />
        </a>
      </Block>
    </>
  );
};
