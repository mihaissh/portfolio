import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set initial dimensions
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // Update dimensions on resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-zinc-900">
        {/* Blurred background layer */}
        <div className="absolute inset-0 backdrop-blur-md bg-zinc-900/70"></div>

        {/* Animated SVG background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: [
              "0px 0px",
              `${width * 0.75}px ${height * 0.75}px`,
            ],
          }}
          transition={{
            duration: 180,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage: `url('/bgpattern.svg')`,
            backgroundRepeat: "repeat",
            filter: "blur(1.5px)",
          }}
        />
      </div>
    </div>
  );
}
