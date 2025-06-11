"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function HeroSection() {
  const words = ["AI Architect", "Data Scientist", "Innovator", "Engineer"];
  return (
    <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={cn(
            "mb-6 max-w-2xl text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
          )}
          layout
        >
          <div className="inline-block">
            Make your websites look 10x <ContainerTextFlip words={words} />
          </div>
        </motion.h1>
      </div>
    </section>
  );
} 