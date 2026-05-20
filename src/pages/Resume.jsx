import { FiMail, FiMapPin } from "react-icons/fi";
import { CertificationSection } from "../components/Resume/CertificationSection";
import { motion } from "framer-motion";
import { Block } from "../components/Homepage/Block";

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-lg text-xs border border-zinc-700/50 backdrop-blur-sm">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <span className="w-8 h-[1px] bg-emerald-500/50"></span>
    {children}
  </h3>
);

export const Resume = () => {
  return (
    <div className="relative min-h-screen w-full">
      <main className="mx-auto max-w-6xl px-4 py-20 relative z-10">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4"
          >
            RESU<span className="text-zinc-600">ME</span>
          </motion.h1>
          <div className="flex flex-wrap gap-6 mt-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 text-zinc-400">
              <FiMail className="text-emerald-400" />
              <span>mstraculencu@gmail.com</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 text-zinc-400">
              <FiMapPin className="text-emerald-400" />
              <span>Brașov, Romania</span>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 space-y-6">
            <Block className="p-8 md:p-12">
              <SectionTitle>Summary</SectionTitle>
              <p className="leading-relaxed text-zinc-300 text-lg">
                Frontend developer based in Brașov. I work mostly with{" "}
                <span className="font-bold text-emerald-400">
                  React, Next.js, TypeScript, Node, Express, PostgreSQL, and MongoDB
                </span>
                .
              </p>
            </Block>

            <Block className="p-8 md:p-12">
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-xl text-white">Frontend Developer</h4>
                    <span className="text-emerald-400 text-sm font-medium">Present</span>
                  </div>
                  <p className="text-zinc-400 mb-4">Freelance & personal projects</p>
                  <ul className="space-y-3">
                    {[
                      "Built responsive apps with React, Next.js, and TypeScript",
                      "APIs with Node/Express, Postgres and MongoDB when needed",
                      "Auth with Clerk and JWT on a few projects",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-zinc-300 text-sm leading-relaxed">
                        <span className="text-emerald-500 font-bold mt-1">/</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Block>
          </div>

          <div className="col-span-12 md:col-span-4 space-y-6">
            <Block className="p-8">
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Front-end</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Back-end</p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "PostgreSQL", "MongoDB"].map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "Vercel"].map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
                  </div>
                </div>
              </div>
            </Block>

            <Block className="p-8 bg-emerald-500/5 border-emerald-500/10">
              <SectionTitle>Certifications</SectionTitle>
              <CertificationSection pdfSrc="/resume/mihai-straculencu-certificare.pdf" />
            </Block>
          </div>
        </div>
      </main>
    </div>
  );
};
