"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
    const links = [
        { label: "Email", href: "mailto:priteshraj41@gmail.com", value: "priteshraj41@gmail.com" },
        { label: "LinkedIn", href: SITE_CONFIG.links.linkedin, value: "linkedin.com/in/priteshraj" },
        { label: "GitHub", href: SITE_CONFIG.links.github, value: "github.com/priteshraj10" },
        { label: "Twitter", href: SITE_CONFIG.links.twitter, value: "@priteshraj_" },
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-zinc-600 text-sm uppercase tracking-wider">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-2 mb-6">
                    Let&apos;s work<br />together
                </h2>
                <p className="text-zinc-500 text-lg max-w-md">
                    Open to opportunities in AI, machine learning, and healthcare technology.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-0"
            >
                {links.map((link, idx) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between py-6 border-b border-zinc-800 hover:border-zinc-600 transition-colors"
                    >
                        <div className="flex items-center gap-8">
                            <span className="text-zinc-600 text-sm w-20">{link.label}</span>
                            <span className="text-white group-hover:text-zinc-300 transition-colors">{link.value}</span>
                        </div>
                        <motion.div
                            className="text-zinc-600 group-hover:text-white transition-colors"
                            whileHover={{ x: 4, y: -4 }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};
