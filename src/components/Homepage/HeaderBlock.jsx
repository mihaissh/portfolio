import { Block } from "./Block";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileImg from "/profile.jpg";

export const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src={profileImg}
        alt="Profile Picture"
        className="mb-4 size-16 rounded-full object-cover"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm Mihai.{" "}
        <span className="text-zinc-400">
          Creating cool and functional user interfaces.
        </span>
      </h1>
      <nav className="flex items-center justify-between">
        <Link
          to="/about-me"
          className="group flex items-center gap-1 text-white hover:underline"
        >
          About me{" "}
          <FiArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
        </Link>
        <Link
          to="/resume"
          className={twMerge(
            `relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] 
            border-white px-4 py-2 font-medium text-sm
            text-white transition-all duration-300
            
            before:absolute before:inset-0
            before:-z-10 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-white
            before:transition-transform before:duration-1000
            before:content-[""]
    
            hover:text-zinc-950
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-95`
          )}
        >
          Resume
        </Link>
      </nav>
    </Block>
  );
};
