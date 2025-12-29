"use client";

import Image from "next/image";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FaLinkedin, FaGithub, FaKaggle, FaMedium, FaXTwitter } from 'react-icons/fa6';
import React from "react";
import { SITE_CONFIG, HERO_WORDS, ANIMATION_CONFIG } from "@/lib/constants";

// Custom HuggingFace SVG component
const HuggingFaceSVG: React.FC<{ size?: number }> = ({ size = 30 }) => (
  <Image src="/huggingface-color.svg" alt="Hugging Face" width={size} height={size} />
);

export function HeroSection() {
  type SocialLink = {
    name: string;
    url: string;
    icon: React.ElementType | React.FC<{ size?: number }>;
  };

  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", url: SITE_CONFIG.links.linkedin, icon: FaLinkedin },
    { name: "GitHub", url: SITE_CONFIG.links.github, icon: FaGithub },
    { name: "X (Twitter)", url: SITE_CONFIG.links.twitter, icon: FaXTwitter },
    { name: "Kaggle", url: SITE_CONFIG.links.kaggle, icon: FaKaggle },
    { name: "Medium", url: SITE_CONFIG.links.medium, icon: FaMedium },
    { name: "Hugging Face", url: SITE_CONFIG.links.huggingface, icon: HuggingFaceSVG },
  ];

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-6xl mx-auto overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION_CONFIG.hero.duration }}
        className="mb-10 relative z-10"
      >
        <div className="relative">
          <Image
            src="/me.jpeg"
            alt="Pritesh Raj profile photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500/50 shadow-2xl mx-auto object-cover ring-4 ring-blue-500/20"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: ANIMATION_CONFIG.hero.delay }}
        className={cn(
          "mb-4 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        )}
      >
        Hi, I&apos;m {SITE_CONFIG.name}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-8 text-3xl md:text-4xl font-semibold text-white/90"
      >
        <span className="inline-block">I&apos;m a </span>
        <ContainerTextFlip 
          words={[...HERO_WORDS]} 
          interval={ANIMATION_CONFIG.textFlip.interval}
          animationDuration={ANIMATION_CONFIG.textFlip.animationDuration}
        />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 leading-relaxed"
      >
        {SITE_CONFIG.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center items-center gap-6 mt-12"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {React.createElement(link.icon, { size: 32 })}
          </motion.a>
        ))}
        <motion.a
          key="Gravatar"
          href={SITE_CONFIG.links.gravatar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="Gravatar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/gravatar.svg" alt="Gravatar Icon" width={32} height={32} />
        </motion.a>
      </motion.div>
    </section>
  );
} 