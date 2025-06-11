"use client";

import Image from "next/image";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function HeroSection() {
  const words = ["AI Architect", "Data Scientist", "Innovator", ];
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Image
          src="/me.jpeg"
          alt="Pritesh Raj profile photo"
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-600 shadow-lg mx-auto"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={cn(
          "mb-4 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-100"
        )}
      >
        Hi, I&apos;m Pritesh Raj
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-6 text-2xl md:text-3xl font-semibold text-blue-400"
      >
        <span className="inline-block">I&apos;m a </span>
        <ContainerTextFlip words={words} />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300"
      >
        Passionate about building intelligent systems and innovative solutions that bridge the gap between AI and real-world impact.
      </motion.p>
    </section>
  );
} 