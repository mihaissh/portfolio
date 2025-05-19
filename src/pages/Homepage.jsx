import { motion } from "framer-motion";
import { AboutBlock } from "../components/Homepage/AboutBlock";
import { HeaderBlock } from "../components/Homepage/HeaderBlock";
import { SocialsBlock } from "../components/Homepage/SocialsBlock";
import { LocationBlock } from "../components/Homepage/LocationBlock";
import { EmailListBlock } from "../components/Homepage/EmailListBlock";

export const Homepage = () => {
  return (
    <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
  );
};
