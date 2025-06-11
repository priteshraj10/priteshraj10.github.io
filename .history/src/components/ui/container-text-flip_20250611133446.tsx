"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface ContainerTextFlipProps {
  words: string[];
}

export function ContainerTextFlip({ words }: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inline-block text-blue-600 dark:text-blue-400"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
