import { Card } from "../components/Projects/Card";
import { TitleCard } from "../components/Projects/TitleCard";
import { projects } from "../lib/projects";

const src =
  "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const Projects = () => {
  return (
    <section className="bg-zinc-800 p-4 text-zinc-50 md:p-12">
      <article className="mx-auto grid max-w-5xl grid-cols-1 divide-zinc-700 border border-zinc-700 md:grid-cols-3">
        <TitleCard title="Projects" />
        {projects.map((p) => (
          <Card key={p.id} src={src} {...p} />
        ))}
      </article>
    </section>
  );
};
