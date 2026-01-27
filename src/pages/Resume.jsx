import { FiGithub, FiLinkedin, FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { SectionHeader } from "../components/About/SectionHeader";
import { Reveal } from "../components/About/Reveal";
import { CertificationSection } from "../components/Resume/CertificationSection";

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">
    {children}
  </span>
);

export const Resume = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24 relative">
      <section className="section-wrapper mx-auto">
        <SectionHeader title="Resume" dir="l" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            <Reveal>
              <h2 className="text-2xl font-bold text-white mb-2">
                Mihai Straculencu
              </h2>
              <p className="text-emerald-400 text-lg mb-4">Frontend Developer</p>
            </Reveal>

            <Reveal>
              <div className="space-y-2 mb-6">
                <a 
                  href="mailto:mstraculencu@gmail.com"
                  className="flex items-center gap-2 text-zinc-300 hover:text-emerald-300 transition-colors w-fit"
                >
                  <FiMail className="text-emerald-400" />
                  <span className="text-sm">mstraculencu@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-zinc-300">
                  <FiMapPin className="text-emerald-400" />
                  <span className="text-sm">Brasov, Romania</span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-bold text-white mt-6 mb-3">Professional Summary</h3>
              <p className="leading-relaxed text-zinc-300">
                Frontend developer from Brasov specializing in building modern, 
                scalable web applications. Proficient in{" "}
                <span className="font-bold text-emerald-400">
                  React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and MongoDB
                </span>
                . Focused on creating solutions that are both functional and maintainable, 
                with a strong emphasis on user experience and performance optimization.{" "}
                <span className="text-emerald-400">
                  I use AI tools to speed up development, better understand complex concepts, 
                  and stay productive.
                </span>
              </p>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-bold text-white mt-8 mb-3">Experience</h3>
              <div>
                <h4 className="font-bold text-emerald-400">Frontend Developer</h4>
                <p className="text-sm text-zinc-400 mb-2">Freelance & Personal Projects</p>
                <ul className="space-y-2 text-zinc-300 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Developed modern, responsive web applications using React, Next.js, and TypeScript</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Built RESTful APIs with Node.js, Express, and integrated with PostgreSQL and MongoDB</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Implemented authentication using Clerk and JWT</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Utilized Docker for containerization and consistent development environments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Applied best practices in code organization and version control with Git</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Used AI tools (ChatGPT, GitHub Copilot, Cursor) to learn faster, debug efficiently, and boost productivity</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-bold text-white mt-8 mb-3">Education</h3>
              <div>
                <h4 className="font-bold text-emerald-400">Computer Science & Software Development</h4>
                <p className="text-sm text-zinc-400 mb-2">Self-Taught & Continuous Learning</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Continuously expanding knowledge through online courses, documentation, 
                  and hands-on project development. Focus on modern web technologies, 
                  software architecture, and best practices in full-stack development.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center justify-between gap-6 mt-8">
                <div className="group flex items-center gap-4 text-sm text-emerald-300">
                  <span>Socials</span>
                  <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <div className="flex items-center text-lg gap-4">
                  <a
                    href="https://www.linkedin.com/in/straculencu-mihai/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://github.com/mihaissh"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://discord.com/users/s_mihai"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                    aria-label="Discord"
                  >
                    <SiDiscord />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Skills Section - Sidebar */}
          <aside>
            <div>
              <h4 className="font-bold mb-6">Front-End</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>JavaScript</SkillBadge>
                <SkillBadge>Tailwind CSS</SkillBadge>
                <SkillBadge>Framer Motion</SkillBadge>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Back-End</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>Express</SkillBadge>
                <SkillBadge>PostgreSQL</SkillBadge>
                <SkillBadge>MongoDB</SkillBadge>
                <SkillBadge>REST API</SkillBadge>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Testing</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <SkillBadge>Jest</SkillBadge>
                <SkillBadge>React Testing Library</SkillBadge>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">AI & Productivity</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <SkillBadge>ChatGPT</SkillBadge>
                <SkillBadge>GitHub Copilot</SkillBadge>
                <SkillBadge>Cursor AI</SkillBadge>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Other Tools</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <SkillBadge>Git</SkillBadge>
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>Vercel</SkillBadge>
                <SkillBadge>Firebase</SkillBadge>
                <SkillBadge>Postman</SkillBadge>
              </div>
            </div>
          </aside>
        </div>

        <CertificationSection pdfSrc="/resume/mihai-straculencu-certificare.pdf" />
      </section>
    </main>
  );
};

