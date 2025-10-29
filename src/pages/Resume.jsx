import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { SectionHeader } from "../components/About/SectionHeader";
import { Reveal } from "../components/About/Reveal";

export const Resume = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24 relative">
      <section className="section-wrapper mx-auto">
        <SectionHeader title="Resume" dir="l" />
        <article className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <aside className="space-y-4">
            <Reveal>
              <h2 className="text-2xl font-bold text-white mb-2">
                Mihai Straculencu
              </h2>
              <p className="text-emerald-400 text-lg mb-4">Full-Stack Developer</p>
            </Reveal>

            <Reveal>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-zinc-300">
                  <FiMail className="text-emerald-400" />
                  <span className="text-sm">mstraculencu@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <FiMapPin className="text-emerald-400" />
                  <span className="text-sm">Cluj-Napoca, Romania</span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-bold text-white mt-6 mb-3">Professional Summary</h3>
              <p className="leading-relaxed text-zinc-300">
                Full-stack developer from Cluj-Napoca specializing in building modern, 
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-400">Full-Stack Developer</h4>
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
                <div className="flex tiems-center text-lg gap-4">
                  <Link
                    target="_blank"
                    rel="noreferrer nofollow"
                    to="https://www.linkedin.com/in/straculencu-mihai/"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                  >
                    <FiLinkedin />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer nofollow"
                    to="https://github.com/mihaissh"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                  >
                    <FiGithub />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer nofollow"
                    to="https://discord.com/users/s_mihai"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                  >
                    <SiDiscord />
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>

          {/* Skills Section - Sidebar */}
          <section className="relative">
            <article>
              <h4 className="font-bold mb-6">Front-End</h4>
              <aside className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">React</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Next.js</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">TypeScript</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">JavaScript</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Tailwind CSS</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Framer Motion</span>
              </aside>
            </article>
            <article>
              <h4 className="font-bold mb-6">Back-End</h4>
              <aside className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Node.js</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Express</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">PostgreSQL</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">MongoDB</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Prisma</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">REST API</span>
              </aside>
            </article>
            <article>
              <h4 className="font-bold mb-6">Testing</h4>
              <aside className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Jest</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Vitest</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">React Testing Library</span>
              </aside>
            </article>
            <article>
              <h4 className="font-bold mb-6">AI & Productivity</h4>
              <aside className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">ChatGPT</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">GitHub Copilot</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Cursor AI</span>
              </aside>
            </article>
            <article>
              <h4 className="font-bold mb-6">Other Tools</h4>
              <aside className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Git</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Docker</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Vercel</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Firebase</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Figma</span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs border border-zinc-700">Postman</span>
              </aside>
            </article>
          </section>
        </article>

        {/* Download PDF Button */}
        <Reveal>
          <div className="flex justify-center mt-12">
            <a
              href="/resume/Straculencu Mihai CV.pdf"
              download
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative px-6 py-3 bg-zinc-800 rounded-lg leading-none flex items-center gap-3 hover:bg-zinc-700 transition-colors">
                <FiDownload className="text-emerald-400 text-xl group-hover:animate-bounce transition-transform" />
                <span className="text-zinc-300 font-medium">Download Resume as PDF</span>
              </button>
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

