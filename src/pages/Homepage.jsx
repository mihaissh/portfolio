import { motion } from "framer-motion";
import { SocialsBlock } from "../components/Homepage/SocialsBlock";
import { LocationBlock } from "../components/Homepage/LocationBlock";
import { EmailListBlock } from "../components/Homepage/EmailListBlock";
import { HeroBlock } from "../components/Homepage/HeroBlock";

export const Homepage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-12 gap-6">
          <HeroBlock />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-9"
          >
            <SocialsBlock />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <LocationBlock />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12"
          >
            <EmailListBlock />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
