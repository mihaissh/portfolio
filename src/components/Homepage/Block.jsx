import { twMerge } from "tailwind-merge";

export const Block = ({ className, ...rest }) => {
  return (
    <div
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 animate-block-appear",
        className
      )}
      {...rest}
    />
  );
};
