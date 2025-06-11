"use client";

import Image from "next/image";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function HeroSection() {
  const words = ["AI Architect", "Data Scientist", "Innovator", "Engineer"];
  const introWords = ["innovative", "impactful", "future-proof", "intelligent"];
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-zinc-800">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-10"
      >
        <Image
          src="/me.jpeg"
          alt="Pritesh Raj profile photo"
          width={200}
          height={200}
          className="rounded-full border-6 border-blue-600 shadow-2xl mx-auto object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "mb-6 text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-300"
        )}
      >
        Building <ContainerTextFlip words={introWords} /> solutions.
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn(
          "mb-4 text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100"
        )}
      >
        Hi, I&apos;m Pritesh Raj
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-8 text-3xl md:text-4xl font-semibold text-blue-400"
      >
        <span className="inline-block">I&apos;m a </span>
        <ContainerTextFlip words={words} />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 leading-relaxed"
      >
        Passionate about building intelligent systems and innovative solutions that bridge the gap between AI and real-world impact.
      </motion.p>
    </section>
  );
} 