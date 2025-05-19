import { Link } from "react-router-dom";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export const NotFound = () => {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({ columns, rows });
  };

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(110, 231 183, 0)" }, { duration: 1.5 });
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(110, 231 183, 1)" }, { duration: 0.15 });
  };

  return (
    <div className="bg-zinc-900 h-screen w-full">
      <div
        ref={scope}
        className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-zinc-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-xl font-black uppercase text-white sm:text-6xl md:text-8xl pb-6">
          You&apos;ve Fallen To The Dark Side
        </h1>
        <Link
          to="/"
          className="pointer-events-auto z-10 bg-emerald-300 px-4 py-2 text-xl font-bold uppercase text-zinc-950 mix-blend-difference"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};
