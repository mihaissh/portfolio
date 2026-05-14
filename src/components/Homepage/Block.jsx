import { twMerge } from "tailwind-merge";

export const Block = ({ className, ...rest }) => {
  return (
    <div
      className={twMerge(
        "rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl animate-block-appear transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-800/60 shadow-lg shadow-black/20",
        className
      )}
      {...rest}
    />
  );
};
