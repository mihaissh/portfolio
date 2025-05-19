import { Block } from "./Block";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
export const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="/headshot.jpg"
        alt="Straculencu Mihai Profile Picture"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm Mihai Straculencu.{" "}
        <span className="text-zinc-400">
          Creating cool and functional user interfaces.
        </span>
      </h1>
      <nav className="flex items-center justify-between">
        <a
          href="/about-me"
          className="group flex items-center gap-1 text-white hover:underline"
        >
          About me{" "}
          <FiArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
        </a>
        <a
          href="/about-me"
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
        </a>
      </nav>
    </Block>
  );
};
