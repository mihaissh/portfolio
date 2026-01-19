import { Card } from "../components/Projects/Card";
import { TitleCard } from "../components/Projects/TitleCard";
import { projects } from "../lib/projects";
import { SectionHeader } from "../components/About/SectionHeader";
import { Reveal } from "../components/About/Reveal";

// Local, cached image to avoid external requests on first load
const src = "/optimized/profile-192w.jpg";
export const Projects = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 md:px-8 pb-24 relative">
      <section className="section-wrapper mx-auto">
        <SectionHeader title="Projects" dir="l" />
        <Reveal>
          <article className="bg-zinc-800 p-4 text-zinc-50 md:p-12 rounded-lg">
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-zinc-700 border border-zinc-700 md:grid-cols-3">
              <TitleCard title="My Work" />
              {projects.map((p) => (
                <Card key={p.id} src={src} {...p} />
              ))}
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
};
