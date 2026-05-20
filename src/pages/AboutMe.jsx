import { FiGithub, FiLinkedin, FiArrowRight, FiCode, FiHeart, FiCoffee } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { Reveal } from "../components/About/Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Block } from "../components/Homepage/Block";

export const AboutMe = () => {
  const [easterEggFound, setEasterEggFound] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      <main className="mx-auto max-w-6xl px-4 py-20 relative z-10">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4"
          >
            ABOUT <span className="text-zinc-600">ME</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl"
          >
            Developer from Brașov. I got into web stuff out of curiosity and never really left.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-8"
          >
            <Block className="space-y-8 p-8 md:p-12">
              <Reveal>
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
                  Hey, I'm Mihai. I like figuring out how things work and then building
                  something people can actually click around in.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-lg leading-relaxed text-zinc-400">
                  Most of what I do is frontend — React, layouts, making things feel smooth.
                  I still enjoy the backend side when a project needs it. Best part is when
                  something finally clicks and the whole thing just{" "}
                  <span className="text-emerald-400 font-semibold italic">works</span>.
                </p>
              </Reveal>

              <Reveal>
                <div className="flex items-center justify-between gap-6 pt-8 border-t border-zinc-700/50">
                  <div className="flex items-center gap-4 text-sm text-emerald-400">
                    <FiCoffee />
                    <span>Say hi</span>
                    <FiArrowRight />
                  </div>
                  <div className="flex items-center gap-6 text-2xl">
                    <a href="https://www.linkedin.com/in/straculencu-mihai/" target="_blank" className="text-zinc-400 hover:text-white transition-colors"><FiLinkedin /></a>
                    <a href="https://github.com/mihaissh" target="_blank" className="text-zinc-400 hover:text-white transition-colors"><FiGithub /></a>
                    <a href="https://discord.com/users/s_mihai" target="_blank" className="text-zinc-400 hover:text-white transition-colors"><SiDiscord /></a>
                  </div>
                </div>
              </Reveal>
            </Block>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 space-y-6"
          >
            <Block className="bg-emerald-500/10 border-emerald-500/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FiHeart className="text-emerald-400 text-xl" />
                <h3 className="font-bold text-white text-xl">Off the clock</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Swimming, cooking experiments, coffee. Sometimes all three in the wrong order.
              </p>
            </Block>

            <Block
              className="cursor-pointer group relative overflow-hidden p-8"
              onClick={() => setEasterEggFound(!easterEggFound)}
            >
              <div className="flex items-center gap-3">
                <FiCode className={`text-xl transition-transform duration-500 ${easterEggFound ? 'rotate-180 text-emerald-400' : 'text-zinc-500'}`} />
                <span className="font-medium text-zinc-300">
                  {easterEggFound ? "Found it 🎉" : "?"}
                </span>
              </div>
              {easterEggFound && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-sm text-zinc-400 italic"
                >
                  "Code is like humor. When you have to explain it, it's bad."
                </motion.p>
              )}
            </Block>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
