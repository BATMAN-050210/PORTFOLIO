import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Shutter exit starts after the clip-path animation (1.6s) + wait time (0.6s)
    const timer = setTimeout(() => {
      setIsDone(true);
      // Wait for exit animation to complete before unmounting/completing
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // match shutter animation duration
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion transition parameters for a luxury agency feel
  const duration = 1.6;
  const ease = [0.76, 0, 0.24, 1];

  return (
    <motion.div
      className="fixed inset-0 bg-primary-red z-[100000] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={isDone ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 1.0, ease: ease }}
    >
      <motion.div
        className="relative select-none text-center"
        animate={isDone ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: ease }}
      >
        {/* Background layer - dark transparent text */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black/20 font-sans uppercase m-0 leading-none">
          Vedansh.
        </h1>

        {/* Foreground layer - animated white text */}
        <motion.h1
          className="absolute inset-0 text-6xl md:text-8xl font-black tracking-tighter text-white font-sans uppercase m-0 leading-none"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: duration, ease: ease, delay: 0.2 }}
        >
          Vedansh.
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
