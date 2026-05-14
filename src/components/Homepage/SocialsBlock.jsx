import { Block } from "./Block";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiGrid, FiArrowUpRight, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const SocialLink = ({ href, to, icon: Icon, label, bgColor, className }) => {
  const content = (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${bgColor} text-white text-base shadow-lg`}>
          <Icon />
        </div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors">
          {label}
        </span>
      </div>
      <FiArrowUpRight className="text-zinc-700 group-hover:text-emerald-400 transition-colors text-base" />
    </div>
  );

  return (
    <Block className={twMerge("group relative overflow-hidden p-3 rounded-xl hover:border-zinc-700 transition-all duration-500", className)}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          {content}
        </a>
      ) : (
        <Link to={to} className="block h-full w-full">
          {content}
        </Link>
      )}
    </Block>
  );
};

export const SocialsBlock = () => {
  return (
    <div className="grid grid-cols-12 gap-4 w-full h-full">
      <SocialLink
        href="https://www.linkedin.com/in/straculencu-mihai/"
        icon={SiLinkedin}
        label="LinkedIn"
        bgColor="bg-blue-600"
        className="col-span-12 md:col-span-8"
      />
      <SocialLink
        href="https://github.com/mihaissh"
        icon={SiGithub}
        label="GitHub"
        bgColor="bg-zinc-700"
        className="col-span-12 md:col-span-4"
      />
      <SocialLink
        to="/projects"
        icon={FiGrid}
        label="Projects"
        bgColor="bg-emerald-600"
        className="col-span-12 md:col-span-4"
      />
      <SocialLink
        to="/snake"
        icon={FiPlay}
        label="Snake"
        bgColor="bg-amber-500"
        className="col-span-12 md:col-span-8"
      />
    </div>
  );
};
