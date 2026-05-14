import { FiGithub, FiLinkedin, FiArrowRight, FiCode, FiHeart, FiCoffee } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { Reveal } from "../components/About/Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Block } from "../components/Homepage/Block";
import { StarsCanvas } from "../components/Homepage/Stars";

export const AboutMe = () => {
  const [easterEggFound, setEasterEggFound] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      <StarsCanvas />
      
      <main className="mx-auto max-w-6xl px-4 py-20 relative z-10">
        {/* Header Section */}
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
            I'm a developer from Brasov who genuinely enjoys building things on the web.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-8"
          >
            <Block className="space-y-8 p-8 md:p-12">
              <Reveal>
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
                  Hey! I'm Mihai. What started as curiosity about how 
                  websites work turned into a passion for creating experiences that 
                  people actually want to use.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-lg leading-relaxed text-zinc-400">
                  I love the problem-solving aspect of development—that moment when 
                  everything clicks and the solution feels just right. Whether it's 
                  crafting a smooth user interface or architecting a clean backend, 
                  I'm always chasing that feeling of building something that just{" "}
                  <span className="text-emerald-400 font-semibold italic">works</span>.
                </p>
              </Reveal>

              <Reveal>
                <div className="flex items-center justify-between gap-6 pt-8 border-t border-zinc-700/50">
                  <div className="flex items-center gap-4 text-sm text-emerald-400">
                    <FiCoffee />
                    <span>Let's connect</span>
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

          {/* Sidebar Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 space-y-6"
          >
            <Block className="bg-emerald-500/10 border-emerald-500/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FiHeart className="text-emerald-400 text-xl" />
                <h3 className="font-bold text-white text-xl">Interests</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                When I'm not coding, you'll find me in the pool, 
                experimenting in the kitchen, or enjoying a 
                good cup of coffee.
              </p>
            </Block>

            <Block 
              className="cursor-pointer group relative overflow-hidden p-8"
              onClick={() => setEasterEggFound(!easterEggFound)}
            >
              <div className="flex items-center gap-3">
                <FiCode className={`text-xl transition-transform duration-500 ${easterEggFound ? 'rotate-180 text-emerald-400' : 'text-zinc-500'}`} />
                <span className="font-medium text-zinc-300">
                  {easterEggFound ? "You found it! 🎉" : "Something hidden?"}
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
