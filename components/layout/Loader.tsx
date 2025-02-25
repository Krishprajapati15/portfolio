"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ weight: "700", subsets: ["latin"] });

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const words = ["Code.", "Create.", "Inspire."];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#0a0a0a] flex items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className={`text-4xl md:text-5xl text-white tracking-wide flex space-x-4 ${cursiveFont.className}`}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
