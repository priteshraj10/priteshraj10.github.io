"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const TechStack = () => {
    const aiModels = [
        { title: "OpenAI", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/openai.png" },
        { title: "Claude", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png" },
        { title: "Gemini", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini.png" },
        { title: "Hugging Face", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface.png" },
        { title: "LangChain", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png" },
        { title: "Llama", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta.png" },
        { title: "Mistral", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/mistral.png" },
        { title: "DeepSeek", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek.png" },
    ];

    const techLogos = [
        { title: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { title: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { title: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { title: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { title: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
        { title: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { title: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { title: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-zinc-600 text-sm uppercase tracking-wider">Expertise</span>
                <h2 className="text-4xl md:text-5xl font-light text-white mt-2">Technologies</h2>
            </motion.div>

            {/* AI/LLM Section */}
            <div className="mb-16">
                <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-8">AI & LLM</h3>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {aiModels.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group flex items-center gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors cursor-default"
                        >
                            <Image
                                src={item.src}
                                width={24}
                                height={24}
                                alt={item.title}
                                className="object-contain"
                                unoptimized
                            />
                            <span className="text-zinc-400 group-hover:text-white transition-colors">{item.title}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Development Stack Section */}
            <div>
                <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-8">Development</h3>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {techLogos.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group flex items-center gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors cursor-default"
                        >
                            <Image
                                src={item.src}
                                width={24}
                                height={24}
                                alt={item.title}
                                className={`object-contain ${item.invert ? 'invert' : ''}`}
                                unoptimized
                            />
                            <span className="text-zinc-400 group-hover:text-white transition-colors">{item.title}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
