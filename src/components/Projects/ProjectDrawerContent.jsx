import { Link } from "react-router-dom";
import { FiGithub, FiGlobe } from "react-icons/fi";

export const ProjectDrawerContent = ({
  project,

  features,
  videoUrl,
  githubUrl,
  websiteUrl,
  backendStacks,
  frontendStacks,
  clientLibraries,
  longDescription,
}) => {
  return (
    <article className="mx-auto max-w-4xl space-y-4 text-zinc-700">
      <header className="flex gap-2 w-full items-center">
        <h2 className="text-4xl font-bold text-zinc-50">{project}</h2>
        <div className="w-full h-[1px] bg-zinc-600" />
        <nav className="flex items-center gap-4">
          <Link to={githubUrl} target="_blank">
            <FiGithub className="text-base hover:text-emerald-300 text-zinc-200 transition-all" />
          </Link>
          <Link to={websiteUrl} target="_blank">
            <FiGlobe className="text-base hover:text-emerald-300 text-zinc-200 transition-all" />
          </Link>
        </nav>
      </header>
      <main className="flex flex-col gap-4">
        <p className="text-zinc-300 tracking-tight text-base">
          {longDescription}
        </p>
        <hgroup className="flex flex-col gap-2">
          <h3 className="text-zinc-100 font-bold tracking-tight leading-3">
            Features:
          </h3>
          {features.map((p, i) => (
            <li
              key={i}
              className="text-zinc-300 text-sm tracking-tight leading-2"
            >
              {p}
            </li>
          ))}
        </hgroup>
      </main>
      <footer className="flex flex-col gap-4">
        <nav className="flex flex-col gap-2">
          <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
            Front-End Stack:{" "}
          </h4>
          <ul className="flex gap-4 items-center">
            {frontendStacks.map((f, i) => (
              <img key={i} src={f.path} alt={f.name} className="h-8 w-8" />
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-4">
          <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
            Back-End Stack:{" "}
          </h4>
          <ul className="flex gap-4 items-center">
            {backendStacks.map((b, i) => (
              <img key={i} src={b.path} alt={b.name} className="h-8 w-8 " />
            ))}
          </ul>
        </nav>

        {clientLibraries.length > 0 && (
          <nav className="flex flex-col gap-2">
            <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
              Other Libraries:{" "}
            </h4>
            <ul className="flex gap-4 items-center">
              {clientLibraries.map((c, i) => (
                <img key={i} src={c.path} alt={c.name} className="h-8 w-8" />
              ))}
            </ul>
          </nav>
        )}
      </footer>
    </article>
  );
};
