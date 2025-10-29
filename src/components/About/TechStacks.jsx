import { TechBadge } from "./TechBadge";

export const TechStacks = () => {
  return (
    <section className="relative">
      <article>
        <h4 className="font-bold mb-6">Front-End Stacks</h4>
        <aside className="flex flex-wrap gap-2 mb-8">
          <TechBadge>NextJS</TechBadge>
          <TechBadge>CSS</TechBadge>
          <TechBadge>Typescript</TechBadge>
          <TechBadge>Javascript</TechBadge>
          <TechBadge>TailwindCSS</TechBadge>
          <TechBadge>UI Libraries</TechBadge>
          <TechBadge>Framer Motion</TechBadge>
        </aside>
      </article>
      <article>
        <h4 className="font-bold mb-6">Back-End Stacks</h4>
        <aside className="flex flex-wrap gap-2 mb-8">
          <TechBadge>NodeJS</TechBadge>
          <TechBadge>Express</TechBadge>
          <TechBadge>PostgreSQL</TechBadge>
          <TechBadge>MongoDB</TechBadge>
          <TechBadge>MySQL</TechBadge>
          <TechBadge>Prisma</TechBadge>
          <TechBadge>Firebase</TechBadge>
          <TechBadge>REST API</TechBadge>
        </aside>
      </article>
      <article>
        <h4 className="font-bold mb-6">Other Tools</h4>
        <aside className="flex flex-wrap gap-2 mb-8">
          <TechBadge>Jira</TechBadge>
          <TechBadge>Git</TechBadge>
          <TechBadge>Vercel</TechBadge>
          <TechBadge>Github</TechBadge>
          <TechBadge>Netlify</TechBadge>
          <TechBadge>Docker</TechBadge>
        </aside>
      </article>
    </section>
  );
};
