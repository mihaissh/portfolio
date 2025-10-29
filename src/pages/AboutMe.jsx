import { FiGithub, FiLinkedin, FiArrowRight, FiCode, FiHeart, FiCoffee } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { SectionHeader } from "../components/About/SectionHeader";
import { Reveal } from "../components/About/Reveal";
import { useState } from "react";

export const AboutMe = () => {
  const [easterEggFound, setEasterEggFound] = useState(false);

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-8 space-y-32 pb-24 relative">
      {/* Easter Egg */}
      <div className="fixed bottom-4 right-4 z-50">
        <div 
          className="relative group"
          onClick={() => setEasterEggFound(!easterEggFound)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <button className="relative px-4 py-2 bg-zinc-800 rounded-lg leading-none flex items-center gap-2 hover:bg-zinc-700 transition-colors">
            <FiCode className="text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span className="text-zinc-300 text-sm">{ easterEggFound ? "🎉" : "?" }</span>
          </button>
        </div>
        {easterEggFound && (
          <div className="absolute bottom-16 right-0 w-64 bg-zinc-800 border border-emerald-500/30 rounded-lg p-4 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="text-sm text-zinc-300 mb-2">
              <span className="text-emerald-400 font-bold">Easter Egg Found! 🎊</span>
            </p>
            <p className="text-xs text-zinc-400">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
            <div className="mt-3 flex gap-1">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse delay-75"></div>
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <section className="section-wrapper mx-auto">
        <SectionHeader title="AboutMe" dir="l" />
        <article className="space-y-6">
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-lg">
              Hey! I'm Mihai, a developer from Cluj-Napoca who genuinely enjoys 
              building things on the web. What started as curiosity about how 
              websites work turned into a passion for creating experiences that 
              people actually want to use.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I love the problem-solving aspect of development—that moment when 
              everything clicks and the solution feels just right. Whether it's 
              crafting a smooth user interface or architecting a clean backend, 
              I'm always chasing that feeling of building something that just{" "}
              <span className="text-emerald-400 font-semibold italic">works</span>.
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 p-6 rounded-lg border border-emerald-700/30">
              <div className="flex items-center gap-2 mb-3">
                <FiHeart className="text-emerald-400" />
                <h3 className="font-bold text-white">When I'm Not Coding</h3>
              </div>
              <p className="leading-relaxed text-zinc-300 text-sm">
                You'll find me in the pool swimming laps (it's my reset button), 
                experimenting in the kitchen with new recipes, or just enjoying a 
                good cup of coffee while reading about the latest tech trends. 
                Balance is key, and these help me stay creative and energized.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I'm always open to new opportunities, collaborations, or just a good 
              conversation about tech. If you're working on something interesting 
              or just want to chat,{" "}
              <span className="text-emerald-400 font-bold">let's connect!</span>
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center justify-between gap-6 pt-4">
              <div className="group flex items-center gap-4 text-sm text-emerald-300">
                <FiCoffee className="text-emerald-400" />
                <span>Find me here</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
              </div>
              <div className="flex items-center text-lg gap-4">
                <a
                  target="_blank"
                  rel="noreferrer nofollow"
                  href="https://www.linkedin.com/in/straculencu-mihai/"
                  className="text-zinc-300 hover:text-emerald-300 transition-colors"
                >
                  <FiLinkedin />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer nofollow"
                  href="https://github.com/mihaissh"
                  className="text-zinc-300 hover:text-emerald-300 transition-colors"
                >
                  <FiGithub />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer nofollow"
                  href="https://discord.com/users/s_mihai"
                  className="text-zinc-300 hover:text-emerald-300 transition-colors"
                >
                  <SiDiscord />
                </a>
              </div>
            </div>
          </Reveal>
        </article>
      </section>
    </main>
  );
};
