"use client";

import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { AboutSection } from "@/components/sections/about";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-zinc-950">
      {/* Hero Section - Full Screen */}
      <section id="home" aria-label="Introduction" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto w-full relative z-10"
        >
          {/* Name - Extra Large Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/Pritesh_Linkedin.JPG"
                alt={`${SITE_CONFIG.name} - AI Architect profile picture`}
                width={120}
                height={120}
                className="rounded-full object-cover border-2 border-zinc-700"
                priority
              />
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold text-white tracking-tighter leading-none">
              Pritesh
              <br />
              <span className="text-zinc-600">Raj</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-zinc-400 font-normal max-w-2xl leading-relaxed tracking-tight">
              LLM Architect specializing in infrastructure for fine-tuning Large Language Models at scale.
            </p>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8 text-sm text-zinc-500"
          >
            <div>
              <span className="block text-zinc-600 text-xs uppercase tracking-wider mb-1">Based in</span>
              <span className="text-zinc-300">India</span>
            </div>
            <div>
              <span className="block text-zinc-600 text-xs uppercase tracking-wider mb-1">Current</span>
              <span className="text-zinc-300">Founder, Langtrain</span>
            </div>
            <div>
              <span className="block text-zinc-600 text-xs uppercase tracking-wider mb-1">Focus</span>
              <span className="text-zinc-300">LLM Infra & Fine-tuning</span>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" aria-label="Selected Projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-zinc-500 text-sm font-medium tracking-tight mb-2 block">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter">Projects</h2>
          </motion.div>
          <Products />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section aria-label="Technology Stack" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" aria-label="Professional Experience" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-zinc-500 text-sm font-medium tracking-tight mb-2 block">Background</span>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter">Experience</h2>
          </motion.div>
          <AboutSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-label="Contact Information" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}
