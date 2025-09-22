"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { FaLinkedin, FaGithub, FaKaggle, FaMedium, FaXTwitter } from 'react-icons/fa6';
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: SITE_CONFIG.links.linkedin, icon: FaLinkedin },
    { name: "GitHub", url: SITE_CONFIG.links.github, icon: FaGithub },
    { name: "X (Twitter)", url: SITE_CONFIG.links.twitter, icon: FaXTwitter },
    { name: "Kaggle", url: SITE_CONFIG.links.kaggle, icon: FaKaggle },
    { name: "Medium", url: SITE_CONFIG.links.medium, icon: FaMedium },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-slate-900/50 to-transparent border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {SITE_CONFIG.name}
                </span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
                <motion.a
                  href={SITE_CONFIG.links.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Hugging Face"
                >
                  <Image src="/huggingface-color.svg" alt="Hugging Face" width={20} height={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} {SITE_CONFIG.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
