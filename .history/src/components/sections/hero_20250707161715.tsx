"use client";

import Image from "next/image";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FaLinkedin, FaGithub, FaKaggle, FaMedium, FaXTwitter } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';

export function HeroSection() {
  const words = ["Entrepreneur", "AI Architect", "Data Scientist", "Innovator"];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/priteshraj", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/priteshraj10", icon: FaGithub },
    { name: "X (Twitter)", url: "https://x.com/10Priteshraj", icon: FaXTwitter },
    { name: "Kaggle", url: "https://www.kaggle.com/priteshraj10", icon: FaKaggle },
    { name: "Medium", url: "https://medium.com/@priteshraj", icon: FaMedium },
    { name: "Hugging Face", url: "https://huggingface.co/priteshraj", icon: SiHuggingface },
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-6xl mx-auto">
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

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "mb-4 text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        )}
      >
        Hi, I&apos;m Pritesh Raj
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-8 text-3xl md:text-4xl font-semibold text-white"
      >
        <span className="inline-block">I&apos;m a </span>
        <ContainerTextFlip words={words} />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto text-xl md:text-2xl text-white leading-relaxed"
      >
        Passionate about building intelligent systems and innovative solutions that bridge the gap between AI and real-world impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center items-center gap-6 mt-8"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label={link.name}
          >
            <link.icon size={30} />
          </a>
        ))}
        <a
          key="Gravatar"
          href="https://gravatar.com/priteshraj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
          aria-label="Gravatar"
        >
          <Image src="/gravatar.svg" alt="Gravatar Icon" width={30} height={30} />
        </a>
      </motion.div>
    </section>
  );
} 